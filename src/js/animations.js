import { inView, animate } from "motion"

// Animate Text to Fade Up
inView(
  ".anim-fade-up",
  ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateY(70px)", "translateY(0)"] },
      { duration: 0.7, easing: "ease-in-out" },
    )
  },
  { amount: 0.2 },
)

inView(
  ".anim-image-swipe",
  ({ target }) => {
    animate(
      target.querySelector(".anim-image-el"),
      { opacity: [0, 1] },
      { delay: 0, duration: 0.7, easing: "ease-in-out" },
    )

    animate(
      target.querySelector(".anim-image-overlay"),
      { opacity: 1, transform: ["translateY(0)", "translateY(-100%)"] },
      { duration: 0.8, easing: "ease-in-out" },
    )
  },
  { amount: 0.2 },
)

inView(
  ".boutique-wrapper",
  ({ target }) => {
    animate(
      target.querySelector(".splide--boutique"),

      {
        borderLeftWidth: ["30vw", 0],
        borderRightWidth: ["30vw", 0],
      },
      { delay: 0, duration: 2, easing: "ease-in-out" },
    )

    animate(
      target.querySelector(".boutique"),
      { opacity: [1, 0] },
      { delay: 1.2, duration: 0.8, easing: "ease-in-out" },
    )
  },
  { amount: 0.4 },
)

inView(
  ".extraordinary-wrapper",
  ({ target }) => {
    animate(
      target.querySelector(".left-border"),
      { width: ["30vw", 0] },
      { delay: 0, duration: 2, easing: "ease-in-out" },
    )

    animate(
      target.querySelector(".right-border"),
      { width: ["30vw", 0] },
      { delay: 0, duration: 2, easing: "ease-in-out" },
    )

    animate(
      target.querySelector(".top-border"),
      { width: ["20vh", 0] },
      { delay: 0, duration: 2, easing: "ease-in-out" },
    )

    animate(
      target.querySelector(".bottom-border"),
      { width: ["20vh", 0] },
      { delay: 0, duration: 2, easing: "ease-in-out" },
    )

    animate(
      target.querySelector(".extraordinary"),
      { opacity: [1, 0] },
      { delay: 1.2, duration: 0.8, easing: "ease-in-out" },
    )
  },
  { amount: 0.4 },
)
