<template>
<div class="container-fluid">

<!-- Header on the page -->
  <div class="moviesHeader">
    <h3 class="display-3">find your next favorite movie!</h3>
    <p class="lead">It's always easy to find a movie to watch. You can easily find the AFI top 100, the most popular movies of the year, or older but still popular movies.</p>
    <p class="lead">But what about when you're tired of all the favorites and want to find something different that you never expected to watch? Well look no further!</p>
    <p class="lead">Whether it's a sleeper hit, a movie you've never heard of, one that you didn't think would be any good, or a forgotten favorite, we've got you covered.</p>
  </div>

<!-- Jumbotron for home page content -->
  <div class="jumbotron jumbotron-fluid">
    <div>
      <b-jumbotron class="jumboHeader" header="slē-pər mü-vē">
        <p class="lead">"Sleeper" is a term used in the entertainment industry for a film that plays successfully for a long period and becomes a big success, despite having relatively little promotion or lacking a successful opening.</p>
        <p class="lead last">Screenings for these films are held in an area conducive to the film's demographic. In the case of "Sleepless in Seattle", a romantic comedy, screenings were held at suburban shopping malls where romantic couples in
          their mid
          20s to early 30s spent Saturday afternoons before seeing a new film. In theory, a successful screening leads to word-of-mouth marketing, as it compels viewers to discuss an interesting, low-key film with co-workers when they return to work
          after their weekend.</p>
        <nuxt-link to="/movies" class="jumboButton">Find Movies!</nuxt-link>
        <p class="lead note">Note: not all of these movies were sleepers, but they're all great movies!</p>
      </b-jumbotron>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Jumbotron"
}
</script>

<!-- Styling the jumbotron for color, padding, rounding, and screen sizes -->
<style>
.jumbotron {
  border-radius: 50%;
  text-align: center;
}

.jumboButton {
  background: #000080;
  text-decoration: none;
  font-size: 1.5rem;
  color: #ffffff;
  padding: 1rem;
  border-radius: 50%;
}

.jumboButton:hover {
  color: #000000;
  text-decoration: none;
  background: #f5c518;
}

.last {
  margin-bottom: 2rem;
}

.note {
  margin-top: 2rem;
}

@media screen and (max-width: 769px) {
  .display-3 {
    font-size: 2em;
  }
}

@media screen and (max-width: 700px) {
  .jumbotron {
    border-radius: 0%;
  }
}
</style>
