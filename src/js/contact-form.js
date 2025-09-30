export default () => ({
	showMessage:  false,
	showError:  false,
	message:  '',
	errors: [],

	getError(name) {
		if (this.errors.length <= 0) {
			return false
		}

		return this.errors[name]?.length > 0;
	},

	getErrorText(name) {
		if (this.errors.length <= 0) {
			return ''
		}

		if (! this.errors[name]) {
			return ''
		}

		return this.errors[name][0]
	},

	async submit() {
		this.showMessage = false
		this.showError = false

		const form = new FormData(this.$el);
		const object = {};
		form.forEach((value, key) => object[key] = value);

		try {
			const res = await fetch(`/actions/${object.action}`, {
				method: "POST",
		  		headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'X-CSRF-Token': object.CRAFT_CSRF_TOKEN,
					'X-Requested-With': 'XMLHttpRequest',
				},
				body: JSON.stringify(object)
			})

			if (!res.ok) {
				this.showMessage = true
				this.message = "Something went wrong, please try again."
			}

			const result = await res.json();

			if (result.errors) {
				this.errors = result.errors
			}

			this.showMessage = true
			this.message = result.message
	    } catch (error) {
	        console.error(error.message);
	    }
	}
})
