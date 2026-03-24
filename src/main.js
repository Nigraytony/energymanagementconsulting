import { createApp } from "vue";
import App from "./App.vue";
import "./styles.css";

const app = createApp(App);

app.directive("reveal", {
  mounted(el, binding) {
    const delay = binding.value?.delay ?? 0;
    const y = binding.value?.y ?? 24;

    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;
    el.style.transition =
      `opacity 700ms ease, transform 700ms ease`;
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
  },
});

app.mount("#app");