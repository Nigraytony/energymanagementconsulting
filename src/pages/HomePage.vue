<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <SiteHeader />
    <main>
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <CtaSection />
    </main>
  </div>
</template>

<script setup>
import SiteHeader from '/src/components/marketing/SiteHeader.vue'
import HeroSection from '/src/components/marketing/HeroSection.vue'
import TrustStrip from '/src/components/marketing/TrustStrip.vue'
import ServicesSection from '/src/components/marketing/ServicesSection.vue'
import WhySection from '/src/components/marketing/WhySection.vue'
import ProcessSection from '/src/components/marketing/ProcessSection.vue'
import CtaSection from '/src/components/marketing/CtaSection.vue'
</script>