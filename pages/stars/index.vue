<template>
  <div>
    <Card />
    <Footer />
  </div>
</template>

<!-- Importing the card and footer components for the stars page -->
<script>
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "stars",
  components: {
    Card,
    Footer
  },
  head () {
    return {
      title: 'Movie Fun! - Stars',
      meta: [
        { hid: 'description', name: 'description', content: 'Stars page with information about movie stars from lesser known movies' },
        { hid: 'keywords', name: 'keywords', content: 'movie, movies, lesser known movies, lesser-known movies, sleeper movies' }
      ]
    }
  }
}
</script>
