<template>
  <section class="relative overflow-hidden">
    <div class="absolute inset-0">
      <div
        class="hero-glow absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <div
        class="hero-glow absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl"
      />
      <div
        class="absolute inset-0 opacity-[0.08]"
        style="
          background-image:
            linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px);
          background-size: 40px 40px;
        "
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-8 lg:pb-28 lg:pt-14">
      <div class="grid items-center gap-14 lg:grid-cols-2">
        <!-- Left Content -->
        <div v-reveal="{ delay: 50, y: 28 }">
          <div class="mb-6 max-w-xl">
            <div
              class="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-white/[0.04] px-5 py-2.5 text-sm text-slate-200 backdrop-blur"
            >
              <span class="flex items-center gap-2">
                <span
                  class="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                />
                <span class="font-medium text-cyan-300">Georgia-Based</span>
              </span>
              <span class="hidden h-4 w-px bg-white/10 sm:block" />
              <span class="text-slate-300">
                Technical consulting for smarter commercial buildings
              </span>
            </div>
          </div>

          <h1
            class="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Building systems that actually perform —
            <span
              class="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent"
            >
              commissioning, controls, and execution aligned.
            </span>
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            EMCx helps commercial clients improve building performance through commissioning,
            controls expertise, system assessments, and practical field-driven execution.
          </p>

          <p class="mt-4 max-w-2xl text-sm text-slate-400">
            Trusted by commercial clients across Georgia for commissioning, controls, and
            performance optimization.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              class="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Request Consultation
            </a>
            <a
              href="#services"
              class="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>

          <div class="mt-12 grid gap-4 sm:grid-cols-2">
            <div
              class="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-900/20"
            >
              <div
                class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10"
              >
                <div class="h-2 w-2 rounded-full bg-cyan-400" />
              </div>

              <p class="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Commissioning
              </p>

              <p class="mt-2 text-sm font-semibold text-white">
                Commissioning & Retro-Commissioning
              </p>

              <p class="mt-2 text-sm text-slate-400">
                Verification-driven support to ensure systems operate as intended.
              </p>

              <div
                class="absolute inset-0 rounded-2xl bg-cyan-500/5 opacity-0 transition group-hover:opacity-100"
              />
            </div>

            <div
              class="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-5 transition duration-300 hover:-translate-y-1 hover:border-indigo-400/30 hover:shadow-lg hover:shadow-indigo-900/20"
            >
              <div
                class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/20 bg-indigo-400/10"
              >
                <div class="h-2 w-2 rounded-full bg-indigo-400" />
              </div>

              <p class="text-xs uppercase tracking-[0.25em] text-indigo-300">
                Controls
              </p>

              <p class="mt-2 text-sm font-semibold text-white">
                BAS / Controls Support
              </p>

              <p class="mt-2 text-sm text-slate-400">
                Practical controls insight from design through field execution.
              </p>

              <div
                class="absolute inset-0 rounded-2xl bg-indigo-500/5 opacity-0 transition group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        <!-- Right Image Panel -->
        <div class="relative" v-reveal="{ delay: 180, y: 28 }">
          <div class="absolute inset-0 -z-10 rounded-3xl bg-cyan-500/20 blur-3xl" />

          <div
            class="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl ring-1 ring-white/5 transition duration-500 hover:scale-[1.01]"
          >
            <img
              src="/img/bg/control-panels-2.png"
              alt="Building automation control panel"
              class="h-full w-full object-cover opacity-95 brightness-100 contrast-110 transition duration-700 group-hover:scale-105"
            />

            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent"
            />

            <div
              class="absolute inset-0 opacity-[0.05]"
              style="
                background-image:
                  linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px);
                background-size: 30px 30px;
              "
            />

            <div class="absolute inset-0 pointer-events-none opacity-[0.03]">
              <div
                class="h-full w-full bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.2),transparent)] animate-[pulse_6s_infinite]"
              />
            </div>

            <!-- Floating Callouts -->
            <div class="float-soft absolute left-[8%] top-[18%] hidden lg:block">
              <div
                class="flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/55 px-3 py-1 text-[11px] text-cyan-300 backdrop-blur-md"
              >
                <span class="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                BACnet Network Active
              </div>
            </div>

            <div
              class="float-soft absolute bottom-[42%] left-[10%] hidden lg:block"
              style="animation-delay: 2s;"
            >
              <div
                class="flex items-center gap-2 rounded-full border border-indigo-400/20 bg-slate-900/55 px-3 py-1 text-[11px] text-indigo-300 backdrop-blur-md"
              >
                <span class="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                Controller Online
              </div>
            </div>

            <div
              class="float-soft absolute bottom-[28%] right-[8%] hidden lg:block"
              style="animation-delay: 1.2s;"
            >
              <div
                class="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-slate-900/55 px-3 py-1 text-[11px] text-emerald-300 backdrop-blur-md"
              >
                <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Field Wiring Verified
              </div>
            </div>

            <!-- Bottom Content -->
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <p class="text-xs uppercase tracking-[0.25em] text-cyan-300">
                Live System Review
              </p>

              <h3 class="mt-2 text-xl font-semibold text-white">
                BAS Panel & Controls Integration
              </h3>

              <p class="mt-2 text-sm text-slate-300">
                Field validation of sequences, wiring integrity, and system performance.
              </p>

              <div class="mt-4 flex flex-wrap gap-2">
                <span
                  class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                >
                  Commissioning
                </span>
                <span
                  class="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300"
                >
                  Controls
                </span>
                <span
                  class="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300"
                >
                  Field Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>