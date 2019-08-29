<template>
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

export default {
  name: "trivia",
  components: {
    Accordion,
    Radio,
    Footer
  }
}
</script>
