<template>
<!-- Using all the necessary components for the page -->
<div>
  <Accordion />
  <Radio />
  <Footer />
</div>
</template>

<!-- Importing accordion, radio, and footer components for the trivia page -->
<script>
import Accordion from "@/components/Accordion.vue";
import Radio from "@/components/Radio.vue";
import Footer from "@/components/Footer.vue";

// Adding light SEO for the page
export default {
  name: "trivia",
  components: {
    Accordion,
    Radio,
    Footer
  },
  head() {
    return {
      title: 'movie fun! - trivia',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'Trivia page for facts and stars of lesser known movies'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'movie, movies, lesser known movies, lesser-known movies, sleeper movies'
        }
      ]
    }
  }
}
</script>
