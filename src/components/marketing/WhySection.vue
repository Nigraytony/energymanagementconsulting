<template>
  <section id="why" class="mx-auto max-w-7xl px-6 pt-6 pb-12 lg:px-8">
    <div class="absolute inset-0 -z-10">
      <div class="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
    </div>

    <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Why EMCx
        </p>

        <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Experience, certifications, and real building systems expertise
        </h2>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          EMCx brings deep technical experience in both commissioning and controls.
          Our team combines certified commissioning leadership with hands-on BAS and
          controls execution across a wide range of commercial building projects.
        </p>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div class="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Commissioning Experience
            </p>
            <p class="mt-3 text-4xl font-bold tracking-tight text-white">25+ Years</p>
            <p class="mt-2 text-sm leading-7 text-slate-400">
              Commissioning experience backed by successful delivery across more than
              100 buildings.
            </p>
          </div>

          <div class="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6">
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
              Controls Experience
            </p>
            <p class="mt-3 text-4xl font-bold tracking-tight text-white">25+ Years</p>
            <p class="mt-2 text-sm leading-7 text-slate-400">
              Controls expertise supported by successful completion of more than 200
              controls facilities.
            </p>
          </div>
        </div>

        <div class="mt-8 h-px w-full bg-white/10"></div>

        <div class="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p class="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
            Credentials & Platforms
          </p>

          <div class="mt-5 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p class="text-sm font-semibold text-white">Commissioning Certifications</p>
              <p class="mt-2 text-sm leading-7 text-slate-400">
                QCxP and BCxP certified commissioning professionals.
              </p>
            </div>

            <div class="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p class="text-sm font-semibold text-white">Controls Platforms</p>
              <p class="mt-2 text-sm leading-7 text-slate-400">
                Johnson Controls (JCI) and Niagara Tridium platforms including FX,
                Distech, Honeywell, and Vykon.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-5">
        <article
          v-for="item in differentiators"
          :key="item.title"
          v-reveal="{ delay: index * 100, y: 24 }"
          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 will-change-transform hover:border-white/20 hover:shadow-2xl hover:shadow-cyan-900/10"
        >
          <div
            class="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
            :class="item.glow"
          />

          <div class="relative flex gap-4">
            <div
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border"
              :class="item.iconWrap"
            >
              <component :is="item.icon" class="h-5 w-5" :class="item.iconColor" />
            </div>

            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.25em]"
                :class="item.labelColor"
              >
                {{ item.label }}
              </p>
              <h3 class="mt-2 text-xl font-semibold text-white">
                {{ item.title }}
              </h3>
              <p class="mt-3 text-sm leading-7 text-slate-400">
                {{ item.description }}
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Award, Building2, Cpu } from 'lucide-vue-next'

const differentiators = [
  {
    label: 'Proven Delivery',
    title: '100+ Buildings Commissioned',
    description:
      'Our commissioning experience includes successful delivery across more than 100 buildings, with a focus on performance verification and owner confidence.',
    icon: Building2,
    iconWrap: 'border-cyan-400/20 bg-cyan-400/10',
    iconColor: 'text-cyan-300',
    labelColor: 'text-cyan-300',
    glow: 'bg-cyan-500/5',
  },
  {
    label: 'Controls Expertise',
    title: '200+ Controls Facilities Completed',
    description:
      'Our controls team brings practical field and integration experience across more than 200 completed controls facilities, supporting reliable execution and real-world operability.',
    icon: Cpu,
    iconWrap: 'border-indigo-400/20 bg-indigo-400/10',
    iconColor: 'text-indigo-300',
    labelColor: 'text-indigo-300',
    glow: 'bg-indigo-500/5',
  },
  {
    label: 'Certified Professionals',
    title: 'QCxP, BCxP, JCI, and Niagara Experience',
    description:
      'EMCx combines certified commissioning leadership with experienced controls engineers familiar with Johnson Controls and Niagara Tridium environments including FX, Distech, Honeywell, and Vykon.',
    icon: Award,
    iconWrap: 'border-emerald-400/20 bg-emerald-400/10',
    iconColor: 'text-emerald-300',
    labelColor: 'text-emerald-300',
    glow: 'bg-emerald-500/5',
  },
]
</script>