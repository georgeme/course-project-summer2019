<!-- <template>
<div>
 <article class="card">
	 <img :src="country.flag" :alt="country.name" class="card__img">
	 <h2 class="card__title">{{ country.name }}</h2>
	 <p class="card__copy">{{ country.subregion }}</p>
 </article>
<div>
</template>

<script>
export default {
  name: CardAPI,
	props: {
		country: Object
	}
},

data () {
  return {
    loading: true,
    countries: null,
    errored:false
  }
},

mounted () {
  axios
    .get('https://restcountries.eu/rest/v2/region/americas')
    .then(response => (this.countries = response.data))
    .catch(error => {
      console.log(error)
      this.errored=true
    })
    .finally (() => this.loading = false)
  }
}

</script>


<style>
.card {
	margin: 1rem;
	border: 1px solid #000;
	padding: 1.5rem;
	max-width: 200px;
	min-height: 200px;
	&__img {
		display: block;
		margin-bottom: 1rem;
	}
	&__title {
		font-size: 1rem;
		margin-bottom: .25rem;
	}
	&__copy {
		font-size: .875rem;
	}
}
</style> -->
