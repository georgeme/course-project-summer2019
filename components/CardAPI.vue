<template>
 <article class="card">

	 <h2 class="card__title">{{ movie.Title }}</h2>
	 <p class="card__copy">{{ movie.Plot }}</p>
 </article>
</template>

<script>
export default {
	props: {
		movie: Object
	}
}
</script>


<style>
.card {
	margin: 1rem;
	border: 1px solid #000;
	padding: 1.5rem;
	max-width: 200px;
	min-height: 200px;
	&__img {
		display: block;
		margin-bottom: 1rem;
	}
	&__title {
		font-size: 1rem;
		margin-bottom: .25rem;
	}
	&__copy {
		font-size: .875rem;
	}
}
</style>
