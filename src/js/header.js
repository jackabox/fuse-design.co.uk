export default () => ({
	showNav: false,
	atTop: true,
	scrollingUp: true,
	isMobile: window.innerWidth < 1024,

	init() {
		this.resizeEvent()
		this.atTop = window.scrollY < 200
	},

	loadSearch() {
		this.closeNavItem()
	},

	closeNavItem() {
		this.showNav = false
	},

	handleScroll() {
		this.atTop = window.scrollY < 200
		this.scrollingUp = document.body.getBoundingClientRect().top > this.scrollPos
		this.scrollPos = document.body.getBoundingClientRect().top
	},

	toggleNav() {
		this.showNav = !this.showNav
		this.overflowClass()
	},

	resizeEvent() {
		this.isMobile = window.innerWidth < 1024
		this.showNav = !this.isMobile
		this.overflowClass()
	},

	overflowClass() {
		const html = document.querySelector("html")
		const body = document.querySelector("body")

		if (this.showNav && this.isMobile) {
			html.classList.add("overflow-hidden")
			body.classList.add("overflow-hidden")
		} else {
			html.classList.remove("overflow-hidden")
			body.classList.remove("overflow-hidden")
		}
	},
})
