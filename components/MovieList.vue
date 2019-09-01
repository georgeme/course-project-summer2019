<template>
<div class="wrapper">
  <h1 class="heading">More Movie Fun!</h1>
  <h3 class="subHeading">Have some fun with some "world" movies too!</h3>
<!-- Creating the section for the cards created with data from the API -->
  <section class="container" v-if="movies">
    <CardAPI v-for="movie of movies" :key="movie.id" :movie="movie" />
  </section>
</div>
</template>

<script>
import CardAPI from '@/components/CardAPI.vue';
// Axios import to use for API call
import axios from 'axios';

export default {
  components: {
    CardAPI
  },
  data() {
    return {
      loading: true,
      movies: null,
      errored: false,
    }
  },

// Axios call to get data for movies with "world" in the title
  mounted() {
    axios
      .get("https://www.omdbapi.com/?s=world&apikey=bb8f8c0")
      .then(response => {
        const sorted = response.data.Search.sort((init, compare) => {
          return init.Title.toLowerCase() > compare.Title.toLowerCase() ?
            1 :
            -1;
        });
        this.movies = sorted;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<!-- Styling for the returned results -->
<style scoped>
.container {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
}

.heading {
  text-align: center;
  font-size: 3rem;
  color: #000080;
  margin: 2rem auto;
}

.subHeading {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #000080;
  margin: 2rem auto;
}

.worldButton {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
}
</style>
