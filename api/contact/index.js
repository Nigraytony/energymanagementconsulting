const sgMail = require("@sendgrid/mail");

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const requestLog = new Map();

const json = (status, message) => ({
  status,
  headers: {
    "Content-Type": "application/json"
  },
  body: { message }
});

const getClientIp = (req) => {
  const forwarded = req.headers["x-forwarded-for"];
  if (!forwarded) {
    return "unknown";
  }

  return String(forwarded).split(",")[0].trim();
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const timestamps = requestLog.get(ip) || [];
  const recent = timestamps.filter((stamp) => now - stamp < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(ip, recent);
    return true;
  }

  recent.push(now);
  requestLog.set(ip, recent);
  return false;
};

const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

module.exports = async function (context, req) {
  const ip = getClientIp(req);
  const body = req.body || {};

  if (isRateLimited(ip)) {
    context.res = json(
      429,
      "Too many requests from this source. Please try again shortly."
    );
    return;
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const company = (body.company || "").trim();
  const message = (body.message || "").trim();
  const website = (body.website || "").trim(); // honeypot

  if (website) {
    context.res = json(200, "Message accepted.");
    return;
  }

  if (!name || !email || !message) {
    context.res = json(400, "Name, email, and message are required.");
    return;
  }

  if (!validEmail(email)) {
    context.res = json(400, "Please provide a valid email address.");
    return;
  }

  if (name.length > 120 || email.length > 254 || company.length > 160) {
    context.res = json(400, "One or more fields exceed allowed length.");
    return;
  }

  if (phone.length > 50 || message.length > 5000) {
    context.res = json(400, "Phone or message content is too long.");
    return;
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    context.log.error("Missing SENDGRID_API_KEY, CONTACT_TO_EMAIL, or CONTACT_FROM_EMAIL");
    context.res = json(500, "Server is not configured for email delivery.");
    return;
  }

  sgMail.setApiKey(apiKey);

  const subjectPrefix = process.env.CONTACT_SUBJECT_PREFIX || "[EMCx Inquiry]";
  const ccEmail = process.env.CONTACT_CC_EMAIL;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "Not provided"}`,
    `Company: ${company || "Not provided"}`,
    "",
    "Message:",
    message
  ].join("\n");

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeCompany = escapeHtml(company || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const html = `
    <h2>New EMCx Website Inquiry</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Phone:</strong> ${safePhone}</p>
    <p><strong>Company:</strong> ${safeCompany}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
  `;

  try {
    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      cc: ccEmail || undefined,
      replyTo: email,
      subject: `${subjectPrefix} ${name}`,
      text,
      html
    });

    context.res = json(200, "Message sent successfully.");
  } catch (error) {
    context.log.error("SendGrid send failure", error?.response?.body || error.message);
    context.res = json(502, "Unable to send message right now. Please try again later.");
  }
};
