<template>
  <div>
    <!-- Header for the page using named slot -->
    <div>
      <div class="moviesHeader">
        <slots-header></slots-header>
      </div>
    </div>
    <section id="imgBorder" class="movies d-flex flex-row" v-if="posts">
      <Images v-for="post in posts" v-bind:post="post" v-bind:key="post.id"></Images>
    </section>
  </div>
</template>

<script>
// Importing the components for the images and named slot
import Images from "~/components/Images.vue";
import SlotsHeader from "~/components/SlotsHeader.vue";

export default {
  name: "MoviesImg",
  components: {
    Images,
    SlotsHeader
  },

  // Prop validation for image id and alt text
  Images: {
    id: {
      type: Number,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },

  // Image data
  data() {
    return {
      posts: [
        {
          id: 1,
          image: require("~/assets/images/007.jpg"),
          alt: "Image of Daniel Craig as James Bond",
          imgTitle: "Daniel Craig as James Bond"
        },
        {
          id: 2,
          image: require("~/assets/images/ironman.png"),
          alt: "Robert Downey Jr. as Iron Man",
          imgTitle: "Robert Downey Jr. as Iron Man"
        },
        {
          id: 3,
          image: require("~/assets/images/thor.jpg"),
          alt: "Image of Chris Hemsworth as Thor",
          imgTitle: "Chris Hemsworth as Thor"
        },
        {
          id: 4,
          image: require("~/assets/images/hanks.jpg"),
          alt: "Image of Tom Hanks",
          imgTitle: "Tom Hanks"
        },
        {
          id: 5,
          image: require("~/assets/images/bogart-bacall.jpg"),
          alt: "Image of Humphrey Bogart and Lauren Bacall",
          imgTitle: "Humphrey Bogart and Lauren Bacall"
        },
        {
          id: 6,
          image: require("~/assets/images/j-law.jpg"),
          alt: "Image of Jennifer Lawrence",
          imgTitle: "Jennifer Lawrence"
        }
      ]
    };
  }
};
</script>

<style>
/* Styling to use flex wrap for images on page */
.movies {
  flex-wrap: wrap;
  justify-content: center;
}
</style>
