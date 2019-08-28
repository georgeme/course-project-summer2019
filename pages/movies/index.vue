<template>
  <div>
    <MoviesImg />
    <ImagesMovies />
    <Footer />
  </div>
</template>

<!-- Importing the moviesimg and footer components for the movies page -->
<script>
import axios from 'axios'
import MoviesImg from "~/components/MoviesImg.vue";
import ImagesMovies from "~/components/ImagesMovies.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "movies",
  components: {
    MoviesImg,
    ImagesMovies,
    Footer
  }
}
</script>
