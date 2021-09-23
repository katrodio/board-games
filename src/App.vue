<template>
	<div class="wrapper">
		<the-header></the-header>
		<base-container>
			<game-page></game-page>
		</base-container>
		<the-footer></the-footer>
	</div>
</template>

<script>
import BaseContainer from "/src/components/ui/BaseContainer.vue";
import TheFooter from "/src/components/TheFooter.vue";
import TheHeader from "/src/components/TheHeader.vue";
import GamePage from "/src/components/games/chronicles-of-crime/GamePage.vue";

export default {
	components: {
		BaseContainer,
		TheFooter,
		TheHeader,
		GamePage,
	},
};
</script>

<style>
@import "assets/css/reset.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap");

* {
	box-sizing: border-box;
}

body,
input,
textarea,
button {
	background-color: #110c19;
	font-family: "Montserrat", sans-serif;
	font-weight: 400;
	color: #ffffff;
}

a {
	text-decoration: none;
}

li {
	list-style: none;
	cursor: pointer;
	-webkit-tap-highlight-color: transparent;
}
</style>
