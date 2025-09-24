import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"
// import focus from "@alpinejs/focus"
import resize from "@alpinejs/resize"

import "./animations"
import header from "./header"
import testimonials from "./testimonials"

// Libs
// Alpine.plugin(focus)
Alpine.plugin(collapse)
Alpine.plugin(resize)

// Components
Alpine.data("header", header)
Alpine.data("testimonials", testimonials)

// Global
window.Alpine = Alpine

// Inits
Alpine.start()
