import { inView, animate } from "motion"

// Animate Text to Fade Up
inView(
  ".anim-fade-up",
  (element) => {
    animate(
      element,
      { opacity: [0, 1], transform: ["translateY(70px)", "translateY(0)"] },
      { duration: 0.7, easing: "ease-in-out" },
    )
  },
  { amount: 0.2 },
)

inView(
  ".anim-fade-in",
  (element) => {
    animate(element, { opacity: [0, 1] }, { duration: 0.7, easing: "ease-in-out" })
  },
  { amount: 0.2 },
)
