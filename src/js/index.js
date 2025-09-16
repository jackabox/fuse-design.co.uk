import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"
// import focus from "@alpinejs/focus"
import resize from "@alpinejs/resize"

import "./animations"
import header from "./header"

// Libs
// Alpine.plugin(focus)
Alpine.plugin(collapse)
Alpine.plugin(resize)

// Components
Alpine.data("header", header)

// Global
window.Alpine = Alpine

// Inits
Alpine.start()
