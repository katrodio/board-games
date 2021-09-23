<template>
	<div class="content">
		<ul class="card__list">
			<li
				class="card__list-item"
				v-for="(card, index) in $store.state.gameChroniclesOfCrime.cards"
				:key="index"
			>
				<div class="card__title" @click="openCardListItem(card)">
					<span
						class="card__title-mark"
						:class="{ 'card__title-mark--open': card.isListItemOpen }"
					></span>
					{{ card.title }}
				</div>
				<transition name="toggle">
					<ul class="card__content" v-show="card.isListItemOpen">
						<game-card
							v-for="number in card.quantity"
							:key="number"
							:id="card.id"
							:number="number"
							:hasSpecificNames="card.hasSpecificNames"
							:specificNames="card.specificNames"
							:hasSpecificStyles="card.hasSpecificStyles"
							:specificStyles="card.specificStyles"
							@openCard="openCard"
						>
						</game-card>
					</ul>
				</transition>
			</li>
		</ul>
		<transition name="toggle">
			<game-card-detail
				v-if="isCardOpen"
				:cardImageSrc="cardImageSrc"
				:hasSpecificStyles="cardObj.hasSpecificStyles"
				@closeCard="closeCard"
			></game-card-detail>
		</transition>
	</div>
</template>

<script>
import GameCard from "./GameCard.vue";
import GameCardDetail from "./GameCardDetail.vue";

export default {
	emits: ["openCard", "closeCard"],
	components: {
		GameCard,
		GameCardDetail,
	},
	data() {
		return {
			isCardOpen: false,
			cardObj: null,
			cardImageSrc: null,
		};
	},
	methods: {
		openCardListItem(card) {
			card.isListItemOpen = !card.isListItemOpen;
		},
		openCard(card) {
			this.isCardOpen = true;
			this.cardObj = card;
			this.cardImageSrc = require(`/src/assets/images/${card.id}/${card.number}.jp`);
		},
		closeCard() {
			this.isCardOpen = false;
		},
	},
};
</script>

<style scoped>
.toggle-enter-active,
.toggle-leave-active {
	transition: all 0.3s ease-out;
}

.toggle-enter-to,
.toggle-leave-from {
	opacity: 1;
}

.toggle-enter-from,
.toggle-leave-to {
	opacity: 0;
}

.card__list-item {
	font-size: 22px;
}

.card__title {
	display: flex;
	align-items: center;
	padding: 30px;
}

.card__content {
	padding: 20px 10px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
	grid-auto-flow: dense;
	grid-gap: 3vw;
}

.card__title-mark {
	position: relative;
	width: 10px;
	height: 10px;
	margin-right: 15px;
	border-radius: 50%;
	border: 2px solid #ababab;
}

.card__title-mark--open {
	background-color: #00ff55;
	box-shadow: 0px 0px 12px #00ff55;
	border: none;
}

.card__title-mark--open:after {
	position: absolute;
	content: "";
	background-color: #00ff55;
	width: 14px;
	height: 14px;
	filter: blur(12px);
	top: 0;
	bottom: 0;
	left: -2px;
	right: 0;
	margin: auto;
}
</style>
