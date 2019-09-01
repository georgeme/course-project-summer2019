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
import MoviesImg from "@/components/MoviesImg.vue";
import ImagesMovies from "@/components/ImagesMovies.vue";
import MovieList from "@/components/MovieList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "movies",
  components: {
    MoviesImg,
    ImagesMovies,
    MovieList,
    Footer
  },
  head () {
    return {
      title: 'Movie Fun! - Movies',
      meta: [
        { hid: 'description', name: 'description', content: 'Movies list for lesser known fun movies' },
        { hid: 'keywords', name: 'keywords', content: 'movie, movies, lesser known movies, lesser-known movies, sleeper movies, musical' }
      ]
    }
  }
}
</script>
