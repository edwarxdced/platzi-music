<template>
	<div class="container">
		<div class="columns is-mobile is-centered">
			<div class="column is-half">
				<div class="notification is-danger">
					<slot name="body"> Algo anduvo mal</slot>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.notification {
		margin: 10px;
	}
</style>