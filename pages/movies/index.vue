<template>
  <div>
    <MoviesImg />
    <CardAPI />
    <ImagesMovies />
    <Footer />
  </div>
</template>

<!-- Importing the moviesimg and footer components for the movies page -->
<script>
import MoviesImg from "~/components/MoviesImg.vue";
import CardAPI from "~/components/CardAPI.vue";
import axios from 'axios'
import ImagesMovies from "~/components/ImagesMovies.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "movies",
  components: {
    MoviesImg,
    CardAPI,
    ImagesMovies,
    Footer
  }
};

</script>
