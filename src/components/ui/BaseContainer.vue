<template>
	<main>
		<div class="container">
			<slot></slot>
		</div>
	</main>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
	max-width: 700px;
	min-height: calc(100vh - 120px);
	margin: 0 auto;
	padding: 0 20px;
}
</style>
