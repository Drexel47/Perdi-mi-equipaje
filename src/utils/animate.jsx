
import { animate } from "framer-motion";

export const scrollToId = (selector) => {
  const element = document.querySelector(selector);
  if (!element) return;

  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + window.scrollY;

  animate(startY, targetY, {
    duration: 0.6,
    ease: "easeInOut",
    onUpdate: (value) => window.scrollTo(0, value),
  });
};
