<template>
<!-- Creating the class to be assigned if border is toggled on -->
<div :class="{ imgBorder: isShowing }">
  <article class="cardAPI" @mouseover="isShowing = true" @mouseleave="isShowing = false">
    <p class="cardAPI__img"><a :href="movie.Poster" target="_blank"><i class="fas fa-image"></i><i class="fas fa-external-link-alt"></i></a></p>
    <h2 class="cardAPI__title">{{ movie.Title }}</h2>
    <p class="cardAPI__year">Year: {{ movie.Year }}</p>
    <p class="cardAPI__imdb"><a :href="'https://www.imdb.com/title/' + movie.imdbID" target="_blank"><i class="fab fa-imdb"></i><i class="fas fa-external-link-alt"></i></a></p>
  </article>
</div>
</template>

<!-- Importing the border.js mixin for the border on movie list items -->
<script>
import {
  toggle
} from "@/assets/mixins/border.js";

// Including props for validation
export default {
  name: "CardAPI",
  props: {
    movie: Object,
    Year: Number,
    Title: String
  },
  mixins: [toggle],
  data() {
    return {
      isShowing: false
    };
  }
};
</script>

<!-- Styling for colors, sizes, and icons -->
<style lang="scss">
.cardAPI {
    margin: 1rem;
    padding: 1.5rem;
    max-width: 200px;
    min-height: 200px;
    background-color: #ffffff;
    border-radius: 25%;
    &__img {
        display: block;
        margin-bottom: 1rem;
        color: #000080;
        font-size: 6rem;
    }
    &__title {
        font-size: 1.5rem;
        margin-bottom: 0.25rem;
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

.fa-external-link-alt {
    font-size: 0.75rem;
}

.imgBorder {
    border: 3px solid #000080;
    background-color: #f5c518;
    border-radius: 25%;
    transition: all 2s ease-in-out;
    transform: scale(1.1);
}
</style>
