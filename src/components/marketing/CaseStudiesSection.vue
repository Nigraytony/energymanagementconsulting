<template>
  <section id="case-studies" class="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
    <div class="absolute inset-0 -z-10">
      <div class="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      <div class="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl" />
    </div>

    <div class="max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Case Studies
      </p>
      <h2 class="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Selected projects and technical applications
      </h2>
      <p class="mt-4 text-lg leading-8 text-slate-300">
        A sample of the commissioning, controls, and performance-focused work EMCx
        delivers for commercial facilities.
      </p>
    </div>

    <div class="mt-14 grid gap-8 xl:grid-cols-3">
      <article
        v-for="study in caseStudies"
        :key="study.title"
        v-reveal="{ delay: index * 120, y: 28 }"
        class="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] transition duration-300 hover:-translate-y-1 will-change-transform hover:border-white/20 hover:shadow-2xl"
      >
        <div
          class="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          :class="study.glow"
        />

        <div class="relative">
          <div class="aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">
            <img
              :src="study.image"
              :alt="study.title"
              class="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          <div class="p-6">
            <div class="flex flex-wrap gap-2">
              <span
                class="rounded-full border px-3 py-1 text-[11px] font-medium"
                :class="study.tagClass"
              >
                {{ study.category }}
              </span>
              <span class="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium text-slate-300">
                {{ study.market }}
              </span>
            </div>

            <h3 class="mt-4 text-xl font-semibold text-white">
              {{ study.title }}
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-400">
              {{ study.summary }}
            </p>

            <div class="mt-6 space-y-4">
              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Challenge
                </p>
                <p class="mt-2 text-sm leading-7 text-slate-300">
                  {{ study.challenge }}
                </p>
              </div>

              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  EMCx Role
                </p>
                <p class="mt-2 text-sm leading-7 text-slate-300">
                  {{ study.role }}
                </p>
              </div>

              <div>
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Outcome
                </p>
                <p class="mt-2 text-sm leading-7 text-slate-300">
                  {{ study.outcome }}
                </p>
              </div>
            </div>
            <div v-if="study.badges" class="mt-6 flex flex-wrap gap-4">
              <div
                v-for="badge in study.badges"
                :key="badge.label"
                class="flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium"
                :class="badge.class"
              >
                {{ badge.label }}: {{ badge.value }}
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const caseStudies = [
  {
    title: 'Life Sciences Facility Commissioning',
    category: 'Commissioning',
    market: 'Manufacturing / Life Sciences',
    image: '/img/portfolio/case-study-commissioning.jpg',

    summary:
      'Full-scope commissioning for a 208,000 SF life sciences facility supporting Boston Scientific’s Infection Prevention Division.',

    challenge:
      'The project required coordinated commissioning across mechanical, electrical, plumbing, life safety, laboratory/process systems, and the building envelope for a specialized manufacturing and warehouse facility. Maintaining alignment from design through occupancy was critical.',

    role:
      'EMCx led total building system commissioning from design through turnover, including OPR development, BoD review, design-phase commissioning, construction observations, functional performance testing, and owner training coordination.',

    outcome:
      'The facility was delivered with fully verified systems, reduced startup risk, and improved long-term reliability. The structured commissioning process provided the owner with confidence in operational readiness at turnover.',

    tagClass: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300',
    glow: 'bg-cyan-500/5',

    badges: [
        {
            label: 'Facility Size',
            value: '208,000 SF',
            class: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300'
        },
        {
            label: 'Scope',
            value: 'Full Building Commissioning',
            class: 'border-indigo-400/20 bg-indigo-400/10 text-indigo-300'
        },
        {
            label: 'Certification',
            value: 'LEED Silver',
            class: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
        }
    ],
  },

  {
    title: 'Federal Facilities Controls Assessment',
    category: 'Assessment',
    market: 'Federal / Government Facilities',
    image: '/img/portfolio/case-study-assessment.jpeg',

    summary:
      'Multi-building controls and system assessment across four federal facilities totaling over 1 million square feet.',

    challenge:
      'The project required a comprehensive evaluation of controls and building systems across active facilities, with a need to identify deficiencies, support upgrades, and maintain operational continuity.',

    role:
      'EMCx performed detailed MEP and controls assessments, developed deficiency reports with actionable recommendations, supported construction coordination, and verified system performance through functional testing.',

    outcome:
      'The project improved system performance, energy efficiency, and occupant comfort while providing the owner with a clear path for addressing deficiencies and planning future improvements.',

    tagClass: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300',
    glow: 'bg-emerald-500/5',

    badges: [
        {
            label: 'Portfolio',
            value: '4 Buildings',
            class: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300'
        },
        {
            label: 'Total Size',
            value: '1M+ SF',
            class: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300'
        },
        {
            label: 'Scope',
            value: 'Controls Assessment',
            class: 'border-indigo-400/20 bg-indigo-400/10 text-indigo-300'
        }
    ],
  },

  {
    title: 'Military Base Controls Upgrade & Integration',
    category: 'Controls',
    market: 'Military / Federal Facilities',
    image: '/img/portfolio/Camp Lejune - website.jpeg',

    summary:
      'Large-scale controls upgrade and integration across 152 buildings at Marine Corps Base Camp Lejeune under a Utility Energy Services Contract.',

    challenge:
      'The project required replacing aging systems and standardizing controls across multiple facility types while maintaining base operations and coordinating across stakeholders.',

    role:
      'EMCx supported assessments, controls design coordination, system upgrades, programming, integration, issue resolution, and functional performance testing, including verification of campus-wide controls integration.',

    outcome:
      'The project delivered more reliable, standardized, and energy-efficient building systems, improving long-term maintainability and supporting mission-critical operations.',

    tagClass: 'border-indigo-400/20 bg-indigo-400/10 text-indigo-300',
    glow: 'bg-indigo-500/5',
    
    badges: [
  { label: 'Scale', value: '152 Buildings', class: 'border-indigo-400/20 bg-indigo-400/10 text-indigo-300' },
  { label: 'Coverage', value: '246 Square Miles', class: 'border-cyan-400/20 bg-cyan-400/10 text-cyan-300' },
  { label: 'Delivery', value: 'UESC Program', class: 'border-emerald-400/20 bg-emerald-400/10 text-emerald-300' },
]
  },
]
</script>