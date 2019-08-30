<template>
 <article class="cardAPI">
   <p class="cardAPI__img"><a :href="movie.Poster"><i class="fas fa-image"></i></a></p>
	 <h2 class="cardAPI__title">{{ movie.Title }}</h2>
	 <p class="cardAPI__year">Year: {{ movie.Year }}</p>
   <p class="cardAPI__imdb"><i class="fab fa-imdb"></i></p>
 </article>
</template>

<script>
export default {
  name: "CardAPI",
	props: {
		movie: Object
	}
}
</script>


<style lang="scss">
.cardAPI {
	margin: 1rem;
	border: 1px solid #000080;
	padding: 1.5rem;
	max-width: 200px;
	min-height: 200px;
  background-color: #ffffff;
	&__img {
		display: block;
		margin-bottom: 1rem;
    color: #000080;
    font-size: 6rem;
	}
	&__title {
		font-size: 1.5rem;
		margin-bottom: .25rem;
    color: #000080;
	}
	&__year {
		font-size: 1rem;
	}
}

.fa-image {
  color: #000080;
  font-size: 6rem;
}

.fa-imdb {
  color: #f5c518;
  font-size: 4rem;
}
</style>
