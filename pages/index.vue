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
  }
};
</script>
