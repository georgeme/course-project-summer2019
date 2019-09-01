<template>
<!-- Using all the necessary components for the page -->
  <div>
    <Card />
    <Footer />
  </div>
</template>

<!-- Importing the card and footer components for the stars page -->
<script>
import Card from "@/components/Card.vue";
import Footer from "@/components/Footer.vue";

// Adding light SEO for the page
export default {
  name: "stars",
  components: {
    Card,
    Footer
  },
  head () {
    return {
      title: 'movie fun! - stars',
      meta: [
        { hid: 'description', name: 'description', content: 'Stars page with information about movie stars from lesser known movies' },
        { hid: 'keywords', name: 'keywords', content: 'movie, movies, lesser known movies, lesser-known movies, sleeper movies' }
      ]
    }
  }
}
</script>
