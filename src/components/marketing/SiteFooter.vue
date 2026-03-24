<template>
  <footer class="border-t border-white/10 bg-slate-950">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <!-- Brand / Summary -->
        <div>
          <div class="flex items-center gap-4">
            <img
              src="/img/favicon.ico"
              alt="Energy Management Consulting logo"
              class="h-10 w-auto object-contain"
            />
            <div>
              <p class="text-sm font-semibold text-white">
                Energy Management Consulting
              </p>
              <p class="text-xs text-slate-400">
                Commissioning • Controls • Performance
              </p>
            </div>
          </div>

          <p class="mt-5 max-w-md text-sm leading-7 text-slate-400">
            EMCx provides commissioning, controls, facility assessments, and
            building performance support for commercial projects with a practical,
            field-informed approach.
          </p>

          <div class="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              class="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/15"
            >
              Request Consultation
            </a>
            <a
              :href="`tel:${company.contact.phone.replace(/[^\d+]/g, '')}`"
              class="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Call EMCx
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigate
          </p>
          <ul class="mt-5 space-y-3 text-sm text-slate-400">
            <li><a href="#top" class="transition hover:text-white">Home</a></li>
            <li><a href="#services" class="transition hover:text-white">Services</a></li>
            <li><a href="#why" class="transition hover:text-white">Why EMCx</a></li>
            <li><a href="#case-studies" class="transition hover:text-white">Case Studies</a></li>
            <li><a href="#process" class="transition hover:text-white">Process</a></li>
            <li><a href="#contact" class="transition hover:text-white">Contact</a></li>
          </ul>
        </div>

        <!-- Services Snapshot -->
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Services
          </p>
          <ul class="mt-5 space-y-3 text-sm text-slate-400">
            <li>Commissioning</li>
            <li>Retro-Commissioning</li>
            <li>Facility Assessments</li>
            <li>BAS / Controls Support</li>
            <li>Energy Optimization</li>
            <li>Project Execution Support</li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Contact
          </p>

          <div class="mt-5 space-y-4 text-sm text-slate-400">
            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Phone</p>
              <a
                :href="`tel:${company.contact.phone.replace(/[^\d+]/g, '')}`"
                class="mt-1 inline-block text-white transition hover:text-cyan-300"
              >
                {{ company.contact.phone }}
              </a>
            </div>

            <div>
              <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Email</p>
              <a
                :href="`mailto:${company.contact.email}`"
                class="mt-1 inline-block text-white transition hover:text-cyan-300"
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
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between"
      >
        <p>© {{ currentYear }} Energy Management Consulting. All rights reserved.</p>
        <p>Proudly operating as a minority-owned small business.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { company } from '../../data/siteContent'

const currentYear = computed(() => new Date().getFullYear())
</script>