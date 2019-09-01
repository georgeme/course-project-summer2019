<template>
  <div>
    <!-- Header start (carousel) -->
    <div class="carousel">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="5000"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          v-for="item in carouselItems"
          :key="item.id"
          :caption="item.text"
          :img-src="item.image"
          fluid
          :alt="item.alt"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <!-- End header -->

    <!-- Navigation start (using router nav items) -->
    <div class="navbar">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand to="/">
          <img
            src="@/assets/images/hollywood.jpg"
            width="150"
            height="60"
            alt="Image of Hollywood sign"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <nuxt-link class="navItem" to="/">home</nuxt-link>
            <nuxt-link class="navItem" to="/movies">movies</nuxt-link>
            <nuxt-link class="navItem" to="/stars">stars</nuxt-link>
            <nuxt-link class="navItem" to="/trivia">trivia</nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <!-- Navigation end -->
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          id: 1,
          image: require("@/assets/images/film.jpg"),
          alt: "Image of red movie film",
          text: "movie fun!"
        },
        {
          id: 2,
          image: require("@/assets/images/movie-theater.jpg"),
          alt: "Image of darkened movie theater",
          text: "movie fun!"
        },
        {
          id: 3,
          image: require("@/assets/images/film-reel.jpg"),
          alt: "Image of blue cinema film and reel",
          text: "movie fun!"
        },
        {
          id: 4,
          image: require("@/assets/images/clapperboard.png"),
          alt: "Image ofmovie set clapperboard",
          text: "movie fun!"
        }
      ],
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<!-- Miscellaneous styling for items in header and navigation -->
<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* color: #2c3e50; */
  margin-top: 60px;
}

html body {
  background-color: #c1d0f0;
}

.carousel img {
  width: 100%;
  height: 30rem;
}

@media screen and (max-width: 769px) {
  .carousel img {
    height: 15rem;
  }
}

.navbar {
  background-color: #000080;
}

.navbar-brand img {
  border-radius: 50%;
}

.navItem {
  font-size: 2em;
  color: #f5c518;
  padding: 1rem;
  border-right: 1px solid #ffffff;
}

.navItem:hover {
  color: #000000;
  text-decoration: none;
  background: #f5c518;
}

.navItem:last-of-type {
  border-right: none;
}

.nuxt-link-exact-active {
  color: #ffffff;
}

@media screen and (max-width: 1024px) {
  .navItem {
    font-size: 1.5em;
  }
}

@media screen and (max-width: 769px) {
  .navItem {
    border: none;
  }
}
</style>
