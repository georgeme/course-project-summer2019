<template>
  <div class="wrapper">
    <h1 class="heading">More Movie Fun!</h1>
    <h3 class="subHeading">Have some fun with some "world" movies too!</h3>
    <section id="imgBorder" class="container" v-if="movies">
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
      errored: false,
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
</style>
