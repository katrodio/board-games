<template>
	<footer class="card__fold-list" @click="foldCardList">
		<button
			:style="{
				'background-image': 'url(' + require('/src/assets/fold.svg') + ')',
			}"
		></button>
	</footer>
</template>

<script>
export default {
	methods: {
		foldCardList(e) {
			this.$store.commit("gameChroniclesOfCrime/foldCardList");
			this.pop(e);
		},
		pop(e) {
			let amount = 40;
			for (let i = 0; i < amount; i++) {
				this.createParticle(e.clientX, e.clientY);
			}
		},
		createParticle(x, y) {
			const particle = document.createElement("particle");
			document.body.appendChild(particle);

			let width = Math.floor(Math.random() * 5 + 5);
			let height = width;
			let destinationX = (Math.random() - 0.5) * 500;
			let destinationY = (Math.random() - 0.5) * 200;
			let rotation = Math.random() * 520;
			let delay = Math.random() * 200;
			var color = `hsl(${Math.random() * 30 + 120}, 100%, 50%)`;

			particle.style.boxShadow = `0 0 ${Math.floor(
				Math.random() * 10 + 10
			)}px ${color}`;
			particle.style.background = color;
			particle.style.width = `${width}px`;
			particle.style.height = `${height}px`;

			const animation = particle.animate(
				[
					{
						transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
						opacity: 1,
					},
					{
						transform: `translate(-50%, -50%) translate(${
							x + destinationX
						}px, ${y + destinationY}px) rotate(${rotation}deg)`,
						opacity: 0,
					},
				],
				{
					duration: Math.random() * 1000 + 3000,
					delay: delay,
				}
			);
			animation.onfinish = this.removeParticle;
		},
		removeParticle(e) {
			e.srcElement.effect.target.remove();
		},
	},
};
</script>

<style>
.card__fold-list {
	background-color: #110c19;
	display: flex;
	align-items: center;
	justify-content: center;
	position: sticky;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 60px;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
}
.card__fold-list button {
	width: 30px;
	height: 30px;
	border: none;
	cursor: pointer;
}
particle {
	position: fixed;
	top: 0;
	left: 0;
	opacity: 0;
	pointer-events: none;
	background-repeat: no-repeat;
	background-size: contain;
	border-radius: 50%;
}
</style>
