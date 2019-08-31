<template>
  <div>
    <Jumbotron />
    <Footer />
  </div>
</template>

<!-- Importing the jumbotron and footer components for the home page -->
<script>
import Jumbotron from "@/components/Jumbotron.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Jumbotron,
    Footer
  },
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', content: 'Home page for Movie Fun site with lesser known movies' },
        { hid: 'keywords', name: 'keywords', content: 'movie, movies, lesser known movies, lesser-known movies, sleeper movies' }
      ]
    }
  }
}
</script>
