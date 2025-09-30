import EmblaCarousel from "embla-carousel"
import Fade from "embla-carousel-fade"
import Autoplay from "embla-carousel-autoplay"
import AutoHeight from 'embla-carousel-auto-height'
import { addPrevNextBtnsClickHandlers, addDotBtnsAndClickHandlers } from "./embala"

export default () => ({
  init() {
    console.log(this.$el)
    console.log(this.$el.querySelector(".embla__viewport"))
    const prevBtnNode = this.$el.querySelector(".embla__button--prev")
    const nextBtnNode = this.$el.querySelector(".embla__button--next")
    const dotsNode = this.$el.querySelector(".embla__dots")

    const emblaApi = EmblaCarousel(
      this.$refs.slider,
      {
        loop: true,
      },
      [Fade(), Autoplay({ playOnInit: true, delay: 10000 }), AutoHeight()],
    )

    const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtnNode, nextBtnNode)
    const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaApi, dotsNode)

    emblaApi.on("destroy", removePrevNextBtnsClickHandlers)
    emblaApi.on("destroy", removeDotBtnsAndClickHandlers)
  },
})
