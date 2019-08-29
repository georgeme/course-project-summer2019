<template>
  <div class="wrapper">
    <h1 class="heading">Countries of Europe</h1>
    <section class="container" v-if="movies">
        <CardAPI
          v-for="movie of movies"
          :key="movie.id"
          :movie="movie"
        />
    </section>
  </div>
</template>

<script>
import CardAPI from '@/components/CardAPI.vue';
import axios from 'axios';

export default {
  components: {
    CardAPI
  },
  data() {
    return {
      loading: true,
      movies: null,
      errored: false
    }
  },

  mounted() {
    axios
      .get("https://www.omdbapi.com/?s=world&apikey=bb8f8c0")
      .then(response => {
        const sorted = response.data.Search.sort((init, compare) => {
          return init.Title.toLowerCase() > compare.Title.toLowerCase()
            ? 1
            : -1;
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

<style>
.container {
  min-height: 100vh;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-wrap: wrap;
}

.heading {
  text-align: center;
  font-size: 2rem;
  color: #555;
  margin: 2rem auto;
}

img {
  max-width: 150px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
