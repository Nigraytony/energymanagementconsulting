<script setup>
import { reactive, ref } from "vue";
import {
  company,
  memberships,
  portfolio,
  team
} from "./data/siteContent";

import SiteHeader from "./components/marketing/SiteHeader.vue";
import HeroSection from "./components/marketing/HeroSection.vue";
import TrustStrip from "./components/marketing/TrustStrip.vue";
import ServicesSection from "./components/marketing/ServicesSection.vue";
import WhySection from "./components/marketing/WhySection.vue";
import CaseStudiesSection from "./components/marketing/CaseStudiesSection.vue";
import ProcessSection from "./components/marketing/ProcessSection.vue";
import SiteFooter from "./components/marketing/SiteFooter.vue";

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
    submitState.value =
      "error";
    submitMessage.value =
      error.message || "Something went wrong. Please try again or call us.";
  }
};
</script>

<template>
  <div id="top" class="min-h-screen bg-slate-950 text-slate-100">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
    >
      Skip to main content
    </a>

    <SiteHeader />

    <main id="main-content">
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <WhySection />
      <CaseStudiesSection />
      <ProcessSection />

      <!-- Minority-owned credibility note -->
      <section class="mx-auto max-w-7xl px-6 mt-6 lg:px-8">
        <div class="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-indigo-500/10 to-slate-900/40 p-6 backdrop-blur">
          
          <div class="grid gap-4 sm:grid-cols-3">
            
            <div class="flex items-center gap-3">
              <div class="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
              <p class="text-sm font-medium text-slate-200">
                Minority-Owned Small Business
              </p>
            </div>

            <div class="flex items-center gap-3">
              <div class="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
              <p class="text-sm font-medium text-slate-200">
                Engineering-Driven Delivery
              </p>
            </div>

            <div class="flex items-center gap-3">
              <div class="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
              <p class="text-sm font-medium text-slate-200">
                Public & Private Sector Experience
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- Portfolio -->
      <section id="portfolio" class="mx-auto max-w-7xl px-6 py-12 lg:px-8" v-reveal>
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Portfolio
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Selected work and representative projects
          </h2>
          <p class="mt-4 text-lg leading-8 text-slate-300">
            Recent and representative projects that reflect EMCx’s technical focus,
            field awareness, and building performance mindset.
          </p>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article
            v-for="project in portfolio"
            :key="project.title"
            class="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
          >
            <div class="aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                :src="project.image"
                :alt="project.title"
                loading="lazy"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div class="p-6">
              <p class="text-xs uppercase tracking-[0.25em] text-cyan-300">
                {{ project.category }}
              </p>
              <h3 class="mt-3 text-xl font-semibold text-white">
                {{ project.title }}
              </h3>
            </div>
          </article>
        </div>
      </section>

      <!-- Team -->
      <section id="team" class="relative border-y border-white/10 bg-white/[0.02]" v-reveal>
        <div class="absolute inset-0 -z-10">
          <div class="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
          <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
        </div>

        <div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div class="max-w-3xl">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Team
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Engineers with practical, field-tested experience
            </h2>
            <p class="mt-5 text-lg leading-8 text-slate-300">
              EMCx brings together commissioning, controls, and field execution experience
              to support projects with technical clarity, disciplined delivery, and
              real-world building systems insight.
            </p>
          </div>

          <div class="mt-14 grid gap-6 lg:grid-cols-2">
            <article
              v-for="(member, index) in team"
              :key="member.name"
              :class="[
                'group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl',
                index === 2 ? 'lg:col-span-2' : ''
              ]"
            >
              <div class="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-cyan-500/[0.03]" />

              <div class="relative flex flex-col gap-6 sm:flex-row" :class="index === 2 ? 'lg:items-center lg:gap-10' : ''">
                <div class="shrink-0">
                  <div class="overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                    <img
                      :src="member.image"
                      :alt="`Headshot of ${member.name}`"
                      loading="lazy"
                      class="h-28 w-28 object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div class="min-w-0 flex-1">
                  <p class="text-xs font-semibold uppercase tracking-[0.25em]" :class="index === 2 ? 'text-indigo-300' : 'text-cyan-300'">
                    {{ member.label || 'Leadership' }}
                  </p>

                  <h3 class="mt-2 text-2xl font-semibold text-white">
                    {{ member.name }}
                  </h3>

                  <p class="mt-2 text-sm font-medium text-cyan-300">
                    {{ member.title }}
                  </p>

                  <div v-if="member.badges?.length" class="mt-4 flex flex-wrap gap-2">
                    <span
                      v-for="badge in member.badges"
                      :key="badge"
                      class="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {{ badge }}
                    </span>
                  </div>

                  <p class="mt-5 text-sm leading-8 text-slate-400">
                    {{ member.bio }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- Professional Affiliations & Platform Experience -->
      <section id="memberships" class="relative mx-auto max-w-7xl px-6 py-12 lg:px-8" v-reveal>
        <div class="absolute inset-0 -z-10">
          <div class="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
          <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
        </div>

        <div class="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <!-- Left Intro -->
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Affiliations
            </p>
            <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Professional affiliations and platform experience
            </h2>
            <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              EMCx maintains active engagement with leading industry organizations and brings
              practical experience with widely used building automation and controls platforms.
            </p>

            <div class="mt-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Why It Matters
              </p>
              <p class="mt-4 text-sm leading-7 text-slate-300">
                These affiliations and platform capabilities reflect EMCx’s commitment to
                technical standards, continuing industry engagement, and real-world BAS and
                controls expertise across commercial facilities.
              </p>

              <div class="mt-6 grid gap-4 sm:grid-cols-3">
                <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Standards</p>
                  <p class="mt-2 text-sm font-medium text-white">Industry-Aligned</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Platforms</p>
                  <p class="mt-2 text-sm font-medium text-white">Controls-Focused</p>
                </div>
                <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Approach</p>
                  <p class="mt-2 text-sm font-medium text-white">Field-Informed</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Content -->
          <div class="space-y-6">
            <!-- Professional Affiliations -->
            <div class="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
              <div class="flex items-center justify-between gap-4">
                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    Professional Affiliations
                  </p>
                  <h3 class="mt-2 text-xl font-semibold text-white">
                    Industry organizations and technical communities
                  </h3>
                </div>
              </div>

              <div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                <div
                  v-for="membership in memberships"
                  :key="membership.name"
                  class="group rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <div class="flex min-h-[90px] items-center justify-center rounded-xl bg-slate-900/50 p-3">
                    <img
                      :src="membership.image"
                      :alt="`${membership.name} logo`"
                      class="max-h-14 w-auto object-contain opacity-90 transition duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <p class="mt-3 text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                    {{ membership.name }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Platform Experience -->
            <div class="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
              <p class="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
                Platform Experience
              </p>
              <h3 class="mt-2 text-xl font-semibold text-white">
                BAS and controls ecosystems our team works with
              </h3>

              <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p class="text-sm font-semibold text-white">Tridium / Niagara</p>
                  <p class="mt-2 text-sm leading-7 text-slate-400">
                    Experience with Niagara-based environments and frameworks used across
                    commercial BAS applications, including integration, graphics, logic,
                    and field coordination workflows.
                  </p>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-[11px] font-medium text-indigo-300">
                      Niagara
                    </span>
                    <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium text-cyan-300">
                      Tridium
                    </span>
                    <span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-slate-300">
                      Integration
                    </span>
                  </div>
                </div>

                <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p class="text-sm font-semibold text-white">Johnson Controls</p>
                  <p class="mt-2 text-sm leading-7 text-slate-400">
                    Practical familiarity with Johnson Controls environments and workflows,
                    including controls implementation, troubleshooting, and coordination in
                    projects involving Metasys and related BAS applications.
                  </p>
                  <div class="mt-4 flex flex-wrap gap-2">
                    <span class="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-[11px] font-medium text-indigo-300">
                      JCI
                    </span>
                    <span class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium text-cyan-300">
                      Metasys
                    </span>
                    <span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-slate-300">
                      Controls Support
                    </span>
                  </div>
                </div>
              </div>

              <div class="mt-5 rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Note</p>
                <p class="mt-2 text-sm leading-7 text-slate-400">
                  Platform experience reflects hands-on familiarity and project execution
                  experience. It is presented to communicate technical capability, not to
                  imply formal endorsement unless separately stated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="mx-auto max-w-7xl px-6 py-12 lg:px-8" v-reveal>
        <div
          class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-8 md:p-12"
        >
          <div class="absolute inset-0">
            <div class="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div class="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div class="relative grid gap-10 lg:grid-cols-[1fr_1.05fr]">
            <!-- Left Column -->
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Contact
              </p>

              <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let’s talk about your building systems
              </h2>

              <p class="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you need commissioning support, a controls-minded facility assessment,
                or help with BAS and system performance, EMCx brings practical technical
                insight from planning through field verification.
              </p>

              <div class="mt-8 grid gap-4 sm:grid-cols-2">
                <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Best For</p>
                  <p class="mt-2 text-sm font-medium text-white">
                    Project inquiries and technical discussions
                  </p>
                  <p class="mt-2 text-sm leading-7 text-slate-400">
                    Share project scope, building type, and current challenges so we can
                    better understand how to help.
                  </p>
                </div>

                <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Response</p>
                  <p class="mt-2 text-sm font-medium text-white">
                    Clear next steps
                  </p>
                  <p class="mt-2 text-sm leading-7 text-slate-400">
                    We’ll review your request and follow up to discuss scope, fit, and the
                    best path forward.
                  </p>
                </div>
              </div>

              <div class="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  Contact Details
                </p>

                <div class="mt-5 space-y-4 text-sm text-slate-300">
                  <div>
                    <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Company</p>
                    <p class="mt-1 font-medium text-white">{{ company.name }}</p>
                  </div>

                  <div>
                    <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Phone</p>
                    <a
                      :href="`tel:${company.contact.phone.replace(/[^\\d+]/g, '')}`"
                      class="mt-1 inline-block font-medium text-white transition hover:text-cyan-300"
                    >
                      {{ company.contact.phone }}
                    </a>
                  </div>

                  <div>
                    <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
                    <a
                      :href="`mailto:${company.contact.email}`"
                      class="mt-1 inline-block font-medium text-white transition hover:text-cyan-300"
                    >
                      {{ company.contact.email }}
                    </a>
                  </div>

                  <div>
                    <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Location</p>
                    <p class="mt-1">{{ company.contact.addressLine1 }}</p>
                    <p>{{ company.contact.addressLine2 }}</p>
                  </div>
                </div>

                <div class="mt-6 flex flex-wrap gap-3">
                  <a
                    :href="`tel:${company.contact.phone.replace(/[^\\d+]/g, '')}`"
                    class="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]"
                  >
                    Call EMCx
                  </a>
                  <a
                    :href="`mailto:${company.contact.email}`"
                    class="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/15"
                  >
                    Email EMCx
                  </a>
                </div>

                <p class="mt-6 text-sm text-slate-400">
                  Proudly operating as a minority-owned small business serving commercial
                  clients with commissioning, controls, and building performance expertise.
                </p>
              </div>
            </div>

            <!-- Right Column / Form -->
            <form
              class="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8 shadow-2xl shadow-cyan-950/10"
              @submit.prevent="submitContact"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    Project Inquiry
                  </p>
                  <h3 class="mt-3 text-2xl font-semibold text-white">
                    Start the conversation
                  </h3>
                </div>
                <div class="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300 md:block">
                  Form Preferred
                </div>
              </div>

              <p class="mt-4 text-sm leading-7 text-slate-400">
                Tell us a little about your building, project type, or system challenge.
              </p>

              <p class="mt-6 text-sm text-slate-400">* Required fields</p>

              <div class="mt-6 grid gap-5">
                <div class="grid gap-5 md:grid-cols-2">
                  <label class="block">
                    <span class="mb-2 block text-sm font-medium text-slate-200">Name*</span>
                    <input
                      v-model="form.name"
                      type="text"
                      name="name"
                      required
                      maxlength="120"
                      autocomplete="name"
                      placeholder="Your name"
                      class="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                    />
                  </label>

                  <label class="block">
                    <span class="mb-2 block text-sm font-medium text-slate-200">Email*</span>
                    <input
                      v-model="form.email"
                      type="email"
                      name="email"
                      required
                      maxlength="254"
                      autocomplete="email"
                      placeholder="you@company.com"
                      class="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                    />
                  </label>
                </div>

                <div class="grid gap-5 md:grid-cols-2">
                  <label class="block">
                    <span class="mb-2 block text-sm font-medium text-slate-200">Phone</span>
                    <input
                      v-model="form.phone"
                      type="tel"
                      name="phone"
                      maxlength="50"
                      autocomplete="tel"
                      placeholder="Optional"
                      class="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                    />
                  </label>

                  <label class="block">
                    <span class="mb-2 block text-sm font-medium text-slate-200">Company</span>
                    <input
                      v-model="form.company"
                      type="text"
                      name="company"
                      maxlength="160"
                      autocomplete="organization"
                      placeholder="Company or organization"
                      class="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                    />
                  </label>
                </div>

                <label class="block">
                  <span class="mb-2 block text-sm font-medium text-slate-200">Message*</span>
                  <textarea
                    v-model="form.message"
                    name="message"
                    rows="7"
                    required
                    maxlength="5000"
                    placeholder="Describe your project, facility type, building systems involved, and what kind of support you need."
                    class="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                  />
                </label>

                <label class="hidden" aria-hidden="true">
                  <span>Website</span>
                  <input
                    v-model="form.website"
                    type="text"
                    name="website"
                    tabindex="-1"
                    autocomplete="off"
                  />
                </label>

                <div class="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    :disabled="submitState === 'submitting'"
                    class="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {{ submitState === "submitting" ? "Sending..." : "Submit Inquiry" }}
                  </button>

                  <a
                    :href="`tel:${company.contact.phone.replace(/[^\\d+]/g, '')}`"
                    class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    Prefer to Call?
                  </a>
                </div>

                <p class="text-sm text-slate-400">
                  For the fastest response, include the building type, project location, and
                  whether you need commissioning, controls, assessment, or troubleshooting support.
                </p>

                <p
                  v-if="submitMessage"
                  :role="submitState === 'error' ? 'alert' : 'status'"
                  aria-live="polite"
                  :class="[
                    'rounded-2xl border px-4 py-3 text-sm',
                    submitState === 'success'
                      ? 'border-emerald-400/20 bg-emerald-400/10 text-emerald-200'
                      : '',
                    submitState === 'error'
                      ? 'border-red-400/20 bg-red-400/10 text-red-200'
                      : ''
                  ]"
                >
                  {{ submitMessage }}
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

      <SiteFooter />

  </div>
</template>