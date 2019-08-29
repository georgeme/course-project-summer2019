<template>
  <div :class="{ imgBorder: isShowing }">
    <!-- Creating the article for the images, changing the text for the image title to uppercase, adding border on click to images -->
    <article class="post">
      <h6 class="display-6 post__imgTitle">{{ post.imgTitle | uppercase }}</h6>
      <span v-b-tooltip.hover :title="post.imgTitle">
        <b-img :src="post.image" @click="toggleShow" fluid rounded="circle" :alt="post.alt"></b-img>
      </span>
    </article>
  </div>
</template>

<script>
// Importing the mixin for the image border
import { toggle } from "~/assets/mixins/border.js";

export default {
  name: "Images",
  props: ["post"],
  mixins: [toggle],
  // Filter to change the image titles to uppercase
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    }
  },
  // The data return value for the mixin
  data() {
    return {
      isShowing: false
    };
  }
};
</script>
<!-- Styling for spacing and the border -->
<style>
.post {
  padding: 2rem;
}

.moviesHeader {
  padding: 1rem;
}

.imgBorder {
  border: 3px solid #000080;
}
</style>
