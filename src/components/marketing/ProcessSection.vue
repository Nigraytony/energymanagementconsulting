<template>
  <section id="process" class="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <div class="absolute inset-0 -z-10">
      <div class="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      <div class="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl" />
    </div>

    <div class="mx-auto max-w-3xl text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Process
      </p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        A clear process from assessment to optimization
      </h2>
      <p class="mt-6 text-lg leading-8 text-slate-300">
        EMCx follows a structured delivery process that supports better decision-making,
        technical coordination, field verification, and long-term building performance.
      </p>
    </div>

    <!-- Desktop Flowchart -->
    <div class="relative mt-16 hidden lg:block">
        <div class="pointer-events-none absolute inset-0 hidden lg:block">
            <template v-for="n in 4" :key="`connector-${n}`">
                <div
                class="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400/40 shadow-[0_0_12px_rgba(34,211,238,0.35)]"
                :style="{
                    left: `${15.5 + (n - 1) * 20}%`
                }"
                />
                <div
                class="absolute top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan-400/20 via-white/10 to-indigo-400/20"
                :style="{
                    left: `${16 + (n - 1) * 20}%`,
                    width: '8%'
                }"
                />
                <div
                class="absolute top-1/2 -translate-y-1/2"
                :style="{
                    left: `${24 + (n - 1) * 20}%`
                }"
                >
                <div class="h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white/20" />
                </div>
            </template>
        </div>
      

      <div class="grid grid-cols-5 gap-6">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          v-reveal="{ delay: index * 90, y: 22 }"
          class="group relative z-10"
        >
          <div
            class="absolute inset-0 rounded-3xl opacity-0 blur-xl transition duration-300 group-hover:opacity-100"
            :class="step.glow"
          />

          <div class="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-6 text-center transition duration-300 hover:-translate-y-1 will-change-transform hover:border-white/20 hover:shadow-2xl">
            <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border" :class="step.iconWrap">
              <component :is="step.icon" class="h-6 w-6" :class="step.iconColor" />
            </div>

            <p class="mt-4 text-xs font-semibold uppercase tracking-[0.25em]" :class="step.labelColor">
              Step 0{{ index + 1 }}
            </p>

            <h3 class="mt-3 text-xl font-semibold text-white">
              {{ step.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-400">
              {{ step.description }}
            </p>
          </div>
        </article>
      </div>
    </div>

    <!-- Mobile / Tablet Flowchart -->
    <div class="relative mt-16 lg:hidden">
      <div class="absolute bottom-6 left-6 top-6 w-px bg-gradient-to-b from-cyan-400/30 via-white/10 to-amber-400/30" />

      <div class="space-y-5">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          class="group relative pl-20"
        >
          <div
            class="absolute left-0 top-4 flex h-12 w-12 items-center justify-center rounded-2xl border"
            :class="step.iconWrap"
          >
            <component :is="step.icon" class="h-5 w-5" :class="step.iconColor" />
          </div>

          <div
            class="absolute left-[3.15rem] top-10 h-px w-6 bg-white/10"
          />

          <div class="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 transition duration-300 hover:border-white/20">
            <div class="flex flex-wrap items-center gap-3">
              <p class="text-xs font-semibold uppercase tracking-[0.25em]" :class="step.labelColor">
                Step 0{{ index + 1 }}
              </p>
              <span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] text-slate-400">
                {{ step.label }}
              </span>
            </div>

            <h3 class="mt-3 text-xl font-semibold text-white">
              {{ step.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-400">
              {{ step.description }}
            </p>
          </div>
        </article>
      </div>
    </div>

    <!-- Bottom Detail Strip -->
    <div class="mt-14 grid gap-4 md:grid-cols-3">
      <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Method</p>
        <p class="mt-2 text-sm font-medium text-white">Structured Delivery</p>
        <p class="mt-2 text-sm leading-7 text-slate-400">
          A disciplined process that keeps scope, coordination, and execution aligned.
        </p>
      </div>

      <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Focus</p>
        <p class="mt-2 text-sm font-medium text-white">Performance Verification</p>
        <p class="mt-2 text-sm leading-7 text-slate-400">
          We prioritize real-world operability, sequence integrity, and measurable results.
        </p>
      </div>

      <div class="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <p class="text-xs uppercase tracking-[0.2em] text-slate-500">Outcome</p>
        <p class="mt-2 text-sm font-medium text-white">Field-Verified Results</p>
        <p class="mt-2 text-sm leading-7 text-slate-400">
          Better turnover confidence, clearer documentation, and stronger long-term performance.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Search,
  ClipboardPenLine,
  Wrench,
  CheckCircle2,
  Gauge,
} from 'lucide-vue-next'

const steps = [
  {
    label: 'Discovery',
    title: 'Assess',
    description:
      'Review building systems, current conditions, project constraints, and owner goals.',
    icon: Search,
    iconWrap: 'border-cyan-400/20 bg-cyan-400/10',
    iconColor: 'text-cyan-300',
    labelColor: 'text-cyan-300',
    glow: 'bg-cyan-500/10',
  },
  {
    label: 'Planning',
    title: 'Plan',
    description:
      'Define priorities, align stakeholders, and establish the technical path forward.',
    icon: ClipboardPenLine,
    iconWrap: 'border-sky-400/20 bg-sky-400/10',
    iconColor: 'text-sky-300',
    labelColor: 'text-sky-300',
    glow: 'bg-sky-500/10',
  },
  {
    label: 'Execution',
    title: 'Implement',
    description:
      'Support field coordination, controls alignment, and issue resolution during delivery.',
    icon: Wrench,
    iconWrap: 'border-indigo-400/20 bg-indigo-400/10',
    iconColor: 'text-indigo-300',
    labelColor: 'text-indigo-300',
    glow: 'bg-indigo-500/10',
  },
  {
    label: 'Validation',
    title: 'Verify',
    description:
      'Test system operation, document findings, and support deficiency resolution.',
    icon: CheckCircle2,
    iconWrap: 'border-emerald-400/20 bg-emerald-400/10',
    iconColor: 'text-emerald-300',
    labelColor: 'text-emerald-300',
    glow: 'bg-emerald-500/10',
  },
  {
    label: 'Performance',
    title: 'Optimize',
    description:
      'Identify refinements that improve comfort, reliability, and long-term efficiency.',
    icon: Gauge,
    iconWrap: 'border-amber-400/20 bg-amber-400/10',
    iconColor: 'text-amber-300',
    labelColor: 'text-amber-300',
    glow: 'bg-amber-500/10',
  },
]
</script>