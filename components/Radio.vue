<template>
<div>
<!-- Header for the radio button section -->
  <div class="triviaHeader">
    <h3 class="display-3">how well did you do?</h3>
    <p class="lead">These weren't easy so don't worry if you didn't do very well.</p>
  </div>

<!-- Creating the form with radio buttons to utilize v-if/else statements for how well did you do -->
  <b-form-group class="howWell">
    <b-form-radio-group v-model="selected" :options="options" name="radios-success" stacked></b-form-radio-group>
    <div v-if="selected === 'nailed'">
      Sweet! But you should rewatch the movies <nuxt-link to="/movies">HERE</nuxt-link> to be sure you really, really know them!
    </div>
    <div v-else-if="selected === 'meh'">
      Watch the movies <nuxt-link to="/movies">HERE</nuxt-link> to learn what you don't know!
    </div>
    <div v-else-if="selected === 'ugh'">
      Sounds like you'd better watch the movies <nuxt-link to="/movies">HERE</nuxt-link> and stat!
    </div>
    <div v-else>
      Make your selection!
    </div>
  </b-form-group>

</div>
</template>

<!-- Data (option selections) for the radio button options -->
<script>
export default {
  name: "Radio",
  data() {
    return {
      selected: '',
      options: [{
          text: 'Nailed it!',
          value: 'nailed'
        },
        {
          text: 'Meh',
          value: 'meh'
        },
        {
          text: 'Ugh',
          value: 'ugh'
        }
      ]
    }
  }
}
</script>

<!-- Some styling to add padding -->
<style>
.howWell {
  padding: 1rem;
}
</style>
