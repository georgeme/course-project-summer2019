<template>
  <div>
    <Card />
    <Footer />
  </div>
</template>

<!-- Importing the card and footer components for the stars page -->
<script>
import Card from "~/components/Card.vue";
import Footer from "~/components/Footer.vue";

export default {
  name: "stars",
  components: {
    Card,
    Footer
  }
}
</script>
