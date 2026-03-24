<template>
  <section id="services" class="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
    <div class="absolute inset-0 -z-10">
      <div class="absolute left-0 top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
    </div>

    <div class="max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Services
      </p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Technical services built around real building performance
      </h2>
      <p class="mt-4 text-lg leading-8 text-slate-300">
        EMCx supports owners, tenants, and project teams with practical engineering
        insight, controls knowledge, and performance-focused execution.
      </p>
    </div>

    <div class="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="service in services"
        :key="service.title"
        v-reveal="{ delay: index * 90, y: 24 }"
        class="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 will-change-transform hover:border-white/20 hover:shadow-2xl"
      >
        <div
          class="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          :class="service.glow"
        />

        <div class="relative">
          <div class="mb-5 flex items-center gap-3">
            <!-- ICON -->
            <div
              class="flex h-12 w-12 items-center justify-center rounded-2xl border"
              :class="service.iconWrap"
            >
              <component
                :is="service.icon"
                class="h-5 w-5"
                :class="service.iconColor"
              />
            </div>

            <!-- LABEL -->
            <p
              class="text-xs font-semibold uppercase tracking-[0.25em]"
              :class="service.labelColor"
            >
              {{ service.label }}
            </p>
          </div>

          <!-- TITLE -->
          <h3 class="mt-3 text-xl font-semibold text-white">
            {{ service.title }}
          </h3>

          <!-- DESCRIPTION -->
          <p class="mt-3 text-sm leading-7 text-slate-400">
            {{ service.description }}
          </p>

          <!-- BULLETS -->
          <ul class="mt-5 space-y-2">
            <li
              v-for="item in service.points"
              :key="item"
              class="flex items-start gap-3 text-sm text-slate-300"
            >
              <component
                :is="service.icon"
                class="mt-0.5 h-4 w-4 shrink-0 opacity-70"
                :class="service.iconColor"
              />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import {
  Activity,
  RefreshCw,
  ClipboardList,
  Cpu,
  Zap,
  Workflow,
} from 'lucide-vue-next'

const services = [
  {
    label: 'Verification',
    title: 'Commissioning',
    description:
      'Verification-driven support to help systems operate as intended and align with project requirements.',
    points: [
      'Functional performance verification',
      'Deficiency identification and resolution support',
      'Owner-focused documentation and reporting',
    ],
    icon: Activity,
    iconWrap: 'border-cyan-400/20 bg-cyan-400/10',
    iconColor: 'text-cyan-300',
    labelColor: 'text-cyan-300',
    glow: 'bg-cyan-500/5',
  },
  {
    label: 'Optimization',
    title: 'Retro-Commissioning',
    description:
      'System evaluation and optimization for existing buildings.',
    points: [
      'Operational issue diagnosis',
      'Sequence refinement',
      'Performance improvements',
    ],
    icon: RefreshCw,
    iconWrap: 'border-sky-400/20 bg-sky-400/10',
    iconColor: 'text-sky-300',
    labelColor: 'text-sky-300',
    glow: 'bg-sky-500/5',
  },
  {
    label: 'Assessment',
    title: 'Facility Assessments',
    description:
      'Structured evaluation of equipment and systems.',
    points: [
      'Equipment condition review',
      'Capital planning support',
      'Clear reporting',
    ],
    icon: ClipboardList,
    iconWrap: 'border-emerald-400/20 bg-emerald-400/10',
    iconColor: 'text-emerald-300',
    labelColor: 'text-emerald-300',
    glow: 'bg-emerald-500/5',
  },
  {
    label: 'Controls',
    title: 'BAS / Controls Support',
    description:
      'Controls review, integration, and troubleshooting.',
    points: [
      'Point-to-point validation',
      'Sequence coordination',
      'Field troubleshooting',
    ],
    icon: Cpu,
    iconWrap: 'border-indigo-400/20 bg-indigo-400/10',
    iconColor: 'text-indigo-300',
    labelColor: 'text-indigo-300',
    glow: 'bg-indigo-500/5',
  },
  {
    label: 'Efficiency',
    title: 'Energy Optimization',
    description:
      'Improve system performance and reduce waste.',
    points: [
      'Operational improvements',
      'Control strategy tuning',
      'Energy savings',
    ],
    icon: Zap,
    iconWrap: 'border-amber-400/20 bg-amber-400/10',
    iconColor: 'text-amber-300',
    labelColor: 'text-amber-300',
    glow: 'bg-amber-500/5',
  },
  {
    label: 'Execution',
    title: 'Project Execution Support',
    description:
      'Support from planning through implementation.',
    points: [
      'Technical coordination',
      'Installation guidance',
      'Stakeholder alignment',
    ],
    icon: Workflow,
    iconWrap: 'border-violet-400/20 bg-violet-400/10',
    iconColor: 'text-violet-300',
    labelColor: 'text-violet-300',
    glow: 'bg-violet-500/5',
  },
]
</script>