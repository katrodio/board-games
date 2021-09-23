import { createStore } from 'vuex'

const gameChroniclesOfCrime = {
	namespaced: true,
	state() {
		return {
			cards: [
				{
					id: 'characters',
					title: 'Персонажи',
					quantity: 61,
					isListItemOpen: false
				},
				{
					id: 'locations',
					title: 'Районы',
					quantity: 17,
					specificNames: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Полиция'],
					specificStyles: [17],
					hasSpecificNames: true,
					hasSpecificStyles: true,
					isListItemOpen: false
				},
				{
					id: 'forensic-contacts',
					title: 'Эксперты',
					quantity: 4,
					specificNames: ['Учёный', 'Криминолог', 'Медэксперт', 'Хакер'],
					specificStyles: [1, 2, 3, 4],
					hasSpecificNames: true,
					hasSpecificStyles: true,
					isListItemOpen: false
				},
				{
					id: 'evidence',
					title: 'Улики',
					quantity: 37,
					isListItemOpen: false
				},
				{
					id: 'special-items',
					title: 'Особые предметы',
					quantity: 15,
					isListItemOpen: false
				}
			]
		}
	},
	mutations: {
		foldCardList(state) {
			state.cards.forEach(card => {
				card.isListItemOpen = false;
			})
		}
	},
}

const store = createStore({
	modules: {
		gameChroniclesOfCrime,
	}
});

export default store;
