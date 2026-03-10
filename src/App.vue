<script setup>
import { reactive, ref } from "vue";
import {
  company,
  memberships,
  portfolio,
  serviceGroups,
  team
} from "./data/siteContent";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  website: ""
});

const submitState = ref("idle");
const submitMessage = ref("");

const resetForm = () => {
  form.name = "";
  form.email = "";
  form.phone = "";
  form.company = "";
  form.message = "";
  form.website = "";
};

const submitContact = async () => {
  submitState.value = "submitting";
  submitMessage.value = "";

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || "Unable to submit your request.");
    }

    submitState.value = "success";
    submitMessage.value =
      "Thank you. Your message has been sent and our team will follow up shortly.";
    resetForm();
  } catch (error) {
    submitState.value = "error";
    submitMessage.value =
      error.message || "Something went wrong. Please try again or call us.";
  }
};
</script>

<template>
  <div id="top" class="site-shell">
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <header class="hero">
      <nav class="top-nav" aria-label="Primary navigation">
        <a href="#" class="brand">
          <img src="/img/EMCx-Logo-Web-Banner---Final-Color.png" alt="EMCx logo" />
        </a>
        <div class="nav-links">
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div class="hero-inner">
        <p class="kicker">{{ company.tagline }}</p>
        <h1>{{ company.heroTitle }}</h1>
        <p>{{ company.heroSubtitle }}</p>
        <div class="hero-cta">
          <a class="btn btn-primary" href="#contact">Request Consultation</a>
          <a class="btn btn-secondary" href="#portfolio">View Portfolio</a>
        </div>
      </div>
    </header>

    <section class="credibility">
      <p>{{ company.minorityOwnedStatement }}</p>
    </section>

    <main id="main-content">
      <section id="services" class="section" aria-labelledby="services-heading">
        <div class="section-heading">
          <h2 id="services-heading">Our Services</h2>
          <p>Clear engineering support across commissioning, assessment, and controls.</p>
        </div>
        <div class="service-grid">
          <article v-for="group in serviceGroups" :key="group.title" class="service-card">
            <h3>{{ group.title }}</h3>
            <p>{{ group.summary }}</p>
            <ul>
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="portfolio" class="section alt" aria-labelledby="portfolio-heading">
        <div class="section-heading">
          <h2 id="portfolio-heading">Selected Portfolio</h2>
          <p>Recent and representative projects. This section is now data-driven for easy updates.</p>
        </div>
        <div class="portfolio-grid">
          <article v-for="project in portfolio" :key="project.title" class="portfolio-card">
            <img :src="project.image" :alt="project.title" loading="lazy" />
            <div class="portfolio-copy">
              <h3>{{ project.title }}</h3>
              <p>{{ project.category }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="team" class="section" aria-labelledby="team-heading">
        <div class="section-heading">
          <h2 id="team-heading">Our Engineers</h2>
          <p>The EMCx team brings practical, field-tested expertise to every engagement.</p>
        </div>
        <div class="team-grid">
          <article v-for="member in team" :key="member.name" class="team-card">
            <img :src="member.image" :alt="`Headshot of ${member.name}`" loading="lazy" />
            <div>
              <h3>{{ member.name }}</h3>
              <p class="team-title">{{ member.title }}</p>
              <p>{{ member.bio }}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="memberships" class="section alt" aria-labelledby="memberships-heading">
        <div class="section-heading">
          <h2 id="memberships-heading">Memberships</h2>
        </div>
        <div class="membership-grid">
          <div
            v-for="membership in memberships"
            :key="membership.name"
            class="membership-card"
          >
            <img :src="membership.image" :alt="`${membership.name} logo`" />
          </div>
        </div>
      </section>

      <section id="contact" class="section contact" aria-labelledby="contact-heading">
        <div class="section-heading">
          <h2 id="contact-heading">Contact EMCx</h2>
          <p>Tell us about your project and we will get back to you.</p>
        </div>
        <div class="contact-layout">
          <form class="contact-form" @submit.prevent="submitContact">
            <p class="required-hint">* Required fields</p>
            <label>
              Name*
              <input
                v-model="form.name"
                type="text"
                name="name"
                required
                maxlength="120"
                autocomplete="name"
              />
            </label>
            <label>
              Email*
              <input
                v-model="form.email"
                type="email"
                name="email"
                required
                maxlength="254"
                autocomplete="email"
              />
            </label>
            <label>
              Phone
              <input
                v-model="form.phone"
                type="tel"
                name="phone"
                maxlength="50"
                autocomplete="tel"
              />
            </label>
            <label>
              Company
              <input
                v-model="form.company"
                type="text"
                name="company"
                maxlength="160"
                autocomplete="organization"
              />
            </label>
            <label>
              Message*
              <textarea
                v-model="form.message"
                name="message"
                rows="6"
                required
                maxlength="5000"
              />
            </label>

            <label class="honeypot" aria-hidden="true">
              Website
              <input
                v-model="form.website"
                type="text"
                name="website"
                tabindex="-1"
                autocomplete="off"
              />
            </label>

            <button type="submit" class="btn btn-primary" :disabled="submitState === 'submitting'">
              {{ submitState === "submitting" ? "Sending..." : "Send Message" }}
            </button>

            <p
              v-if="submitMessage"
              :role="submitState === 'error' ? 'alert' : 'status'"
              aria-live="polite"
              :class="[
                'form-status',
                submitState === 'success' ? 'success' : '',
                submitState === 'error' ? 'error' : ''
              ]"
            >
              {{ submitMessage }}
            </p>
          </form>

          <aside class="contact-details">
            <h3>{{ company.name }}</h3>
            <p>{{ company.contact.addressLine1 }}</p>
            <p>{{ company.contact.addressLine2 }}</p>
            <p>
              <a :href="`tel:${company.contact.phone.replace(/[^\\d+]/g, '')}`">{{
                company.contact.phone
              }}</a>
            </p>
            <p>
              <a :href="`mailto:${company.contact.email}`">{{ company.contact.email }}</a>
            </p>
            <p class="minority-note">
              Proudly operating as a minority-owned small business.
            </p>
          </aside>
        </div>
      </section>
    </main>
  </div>
</template>
