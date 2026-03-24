<template>
  <header
    class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
      
      <!-- Logo + Company Name -->
      <a href="#top" class="flex items-center gap-4">
        <img
          src="/img/favicon.ico"
          alt="Energy Management Consulting logo"
          class="h-12 w-auto object-contain"
        />
        <div>
          <p class="text-lg font-semibold tracking-tight text-white">
            Energy Management Consulting
          </p>
          <p class="text-xs text-slate-400">
            Commissioning • Controls • Performance
          </p>
        </div>
      </a>

      <!-- Navigation -->
      <nav class="hidden items-center gap-8 md:flex">
        <a
          href="#services"
          class="relative text-sm text-slate-300 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Services
        </a>

        <a
          href="#why"
          class="relative text-sm text-slate-300 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Why EMCx
        </a>

        <a
          href="#process"
          class="relative text-sm text-slate-300 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Process
        </a>

        <a
          href="#contact"
          class="relative text-sm text-slate-300 transition hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Contact
        </a>
      </nav>

      <!-- CTA Button -->
      <div class="hidden md:block">
        <a
          href="#contact"
          class="inline-flex items-center rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-400/15 to-indigo-400/15 px-5 py-2.5 text-sm font-semibold text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:from-cyan-400/25 hover:to-indigo-400/25 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
        >
          Request Consultation
        </a>
      </div>

      <!-- Mobile Menu Button (optional future use) -->
      <button
        class="ml-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 md:hidden"
      >
        ☰
      </button>
    </div>
  </header>
</template>