export default () => ({
	showNav: false,
	atTop: true,
	scrollingUp: true,

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
		this.showNav = window.innerWidth <= 1024 ? false : true
		this.overflowClass()
	},

	overflowClass() {
		const html = document.querySelector("html")
		const body = document.querySelector("body")

		if (this.showNav && window.innerWidth <= 1024) {
			html.classList.add("overflow-hidden")
			body.classList.add("overflow-hidden")
		} else {
			html.classList.remove("overflow-hidden")
			body.classList.remove("overflow-hidden")
		}
	},
})
