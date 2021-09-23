<template>
	<li
		class="card__content-item"
		:class="{ 'card__specific-style': isSpecificStyle }"
	>
		<button @click="openCard" class="card">
			{{ title }}
		</button>
	</li>
</template>

<script>
export default {
	props: [
		"id",
		"number",
		"hasSpecificNames",
		"specificNames",
		"hasSpecificStyles",
		"specificStyles",
	],
	data() {
		return {
			title: "",
			isSpecificStyle: false,
		};
	},
	created() {
		if (this.hasSpecificNames) {
			this.title = this.specificNames[this.number - 1];
		} else {
			this.title = this.number;
		}

		if (this.hasSpecificStyles) {
			this.isSpecificStyle = this.specificStyles.includes(this.number);
		}
	},
	methods: {
		openCard() {
			this.$emit("openCard", {
				id: this.id,
				number: this.number,
				hasSpecificStyles: this.hasSpecificStyles,
			});
		},
	},
};
</script>

<style scoped>
.card {
	width: 100%;
	height: 75px;
	border-radius: 20px;
	border: none;
	font-size: 22px;
	background-color: rgba(255, 255, 255, 0.1);
	cursor: pointer;
}

.card__content-item {
	position: relative;
}

.card__content-item:after {
	content: "";
	position: absolute;
	width: 20px;
	height: 25px;
	top: 0;
	right: 0;
	left: 0;
	margin: auto;
	bottom: 0;
	filter: blur(10px);
	z-index: -1;
	background: linear-gradient(45deg, #a100ff, #0066ff);
}

.card__specific-style {
	grid-column: span 2;
}
.card__specific-style .card {
	padding: 0 10px;
}
.card__specific-style:after {
	width: 120px;
	height: 20px;
	filter: blur(20px);
}
</style>
