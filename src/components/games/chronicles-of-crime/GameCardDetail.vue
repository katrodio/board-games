<template>
	<div class="card__detail">
		<div class="card__detail-img">
			<div
				ref="cardImage"
				class="card__image-wrapper"
				:class="{ 'card__image-specific-style': hasSpecificStyles }"
			>
				<img class="card__image" :src="cardImageSrc" alt="#" />
			</div>
		</div>
		<div @click="closeCard" class="card__image-bg">
			<button
				class="card__close-btn"
				:style="{
					'background-image': 'url(' + require('/src/assets/close.svg') + ')',
				}"
			></button>
		</div>
	</div>
</template>

<script>
export default {
	props: ["cardImageSrc", "hasSpecificStyles"],
	mounted() {
		this.$refs.cardImage.scrollLeft += 1000;
	},
	methods: {
		closeCard() {
			this.$emit("closeCard");
		},
	},
};
</script>

<style scoped>
.card__detail {
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(17, 12, 25, 0.95);
}

.card__detail-img {
	position: relative;
	margin: 30px auto;
	display: table;
	border-radius: 10px;
	background: linear-gradient(to top left, #0066ff, #a100ff);
}

.card__detail-img:before {
	content: "";
	z-index: -1;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: inherit;
	transform: translateY(10px);
	filter: blur(20px);
	opacity: 0.7;
	transition: opacity 0.3s;
}

.card__image-wrapper {
	background-size: cover;
	background-position: right bottom;
	width: 304px;
	height: 460px;
	top: -2px;
	position: relative;
	overflow-y: hidden;
	overflow-x: hidden;
	border-bottom: 2px solid #9f00f1;
	border-left: 2px solid #9f00f1;
	border-right: 2px solid #9f00f1;
	border-top: 2px solid #9f00f1;
	border-radius: 10px;
}

.card__image-specific-style {
	overflow-x: scroll;
	border-bottom: none;
}

.card__image-specific-style::-webkit-scrollbar {
	border-bottom-right-radius: 10px;
	border-bottom-left-radius: 10px;
	height: 5px;
	background-color: #9f00f1;
}

.card__image-specific-style::-webkit-scrollbar-thumb {
	background-color: #adbcff;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
}

.card__image-specific-style::-webkit-scrollbar-thumb:hover {
	background-color: #0066ff;
}

.card__image {
	height: 101%;
	background-position: bottom right;
	background-size: cover;
}

.card__image-bg {
	display: flex;
	height: 200px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
}

.card__close-btn {
	border: none;
	width: 60px;
	height: 60px;
	background-color: transparent;
	margin: 30px auto;
	cursor: pointer;
}
</style>
