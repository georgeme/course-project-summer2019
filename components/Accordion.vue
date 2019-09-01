<template>
<div role="tablist">
<!-- Creating the header for the accordion on the Trivia page -->
  <div class="container d-flex align-items-center justify-content-center">
    <div class="triviaHeader my-auto">
      <h3 class="display-3">test your movie knowledge!</h3>
      <p class="lead">How much do you know about older or lesser known movies? Click each question below when you're ready to see the answer.</p>
      <img src="@/assets/images/fun-movie-stuff.png" class="img-fluid rounded-circle" alt="Image of film, 3D glasses, and movie snacks" />
    </div>
  </div>

<!-- Creating the accordion iterating over the array in the script -->
  <b-card no-body class="mb-1" v-for="item in accordionItems" :key="item.accId">
    <b-card-header header-tag="header" class="p-1" role="tab">
      <b-button block v-b-toggle="'accordion-' + item.accId" variant="primary">{{ item.button }}</b-button>
    </b-card-header>
    <b-collapse :id="'accordion-' + item.accId" accordion="my-accordion" role="tabpanel">
      <b-card-body>
        <b-card-text>{{ item.text }}</b-card-text>
      </b-card-body>
    </b-collapse>
  </b-card>
</div>
</template>

<!-- Script data for the accordion items -->
<script>
export default {
  name: "Accordion",
  data() {
    return {
      reactive: true,
      accordionItems: [{
          accId: 1,
          button: `Who played Burt and Heather Gummer in Tremors?`,
          text: `Answer: Burt: Michael Gross, Heather: Reba McEntire`
        },

        {
          accId: 2,
          button: `In "The Bachelor and the Bobby-Soxer" (1947), what line does Dick Nugent (Cary Grant) use to convince Susan Turner (Shirley Temple) he's no more mature than boys her own age?`,
          text: `Answer: "Mellow greetings, yookie dookie!"`
        },

        {
          accId: 3,
          button: `What famous character actor who's now deceased plays the studio executive Allen Habel in Kevin Bacon's "The Big Picture"?`,
          text: `Answer: J.T. Walsh`
        },

        {
          accId: 4,
          button: `Also in "The Big Picture", what famous comedic actor takes an uncredited role as Kevin Bacon's agent?`,
          text: `Answer: Martin Short`
        },

        {
          accId: 5,
          button: `In the movie "Joe Versus the Volcano", Meg Ryan plays three separate characters. Can you name the three characters? Which of the three does Joe end up marrying?`,
          text: `Answer: She plays: DeDe, Angelica, and Patricia. He marries Patricia.`
        },

        {
          accId: 6,
          button: `In "She's Having a Baby", Jefferson (Kevin Bacon) has a fantasy about a character played by Isabel Garcia Lorca. What song is playing during that fantasy?`,
          text: `Answer: "Haunted When the Minutes Drag" by Love and Rockets`
        }
      ]
    };
  }
};
</script>

<!-- Some styling for padding, colors, and screen sizes -->
<style scoped>
.triviaHeader {
  padding: 1rem;
  text-align: left;
}

@media screen and (max-width: 1025px) {
  h3.display-3 {
    font-size: 1.5em;
    font-weight: 600;
  }
}

button {
  background: #000080;
  font-size: 1.5rem;
}

.card-text {
  font-size: 1.5rem;
  color: #000080;
}

@media screen and (max-width: 750px) {
  button {
    font-size: 1rem;
  }
}

@media screen and (max-width: 750px) {
  .card-text {
    font-size: 1rem;
  }
}
</style>
