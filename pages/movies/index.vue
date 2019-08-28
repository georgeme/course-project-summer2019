<template>
  <div>
    <MoviesImg />
    <ImagesMovies />
    <MovieList />
    <Footer />
  </div>
</template>

<!-- Importing the moviesimg and footer components for the movies page -->
<script>
import MoviesImg from "~/components/MoviesImg.vue";
import ImagesMovies from "~/components/ImagesMovies.vue";
import MovieList from "~/components/MovieList.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "movies",
  components: {
    MoviesImg,
    ImagesMovies,
    MovieList,
    Footer
  }
}
</script>
