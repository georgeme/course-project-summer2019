<template>
  <div class="container-fluid">
<!-- Lists of movies using array -->
    <div class="moviesHeader">
      <h5 class="display-5">And then there are movies we don't remember, never knew, or forgot...</h5>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Comedy</h5>
            <b-list-group>
              <b-list-group-item class="movieList" v-for="(item, index) in comedy">{{ item.movie }} <a :href="'https://www.imdb.com/title/' + item.imdb"><i class="fas fa-info-circle"></i><i class="fas fa-external-link-alt"></i></a></b-list-group-item>
            </b-list-group>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Romance</h5>
          <b-list-group>
            <b-list-group-item class="movieList" v-for="(item, index) in romance">{{ item.movie }} <a :href="'https://www.imdb.com/title/' + item.imdb"><i class="fas fa-info-circle"></i><i class="fas fa-external-link-alt"></i></a></b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Musical</h5>
          <b-list-group>
            <b-list-group-item class="movieList" v-for="(item, index) in musical">{{ item.movie }} <a :href="'https://www.imdb.com/title/' + item.imdb"><i class="fas fa-info-circle"></i><i class="fas fa-external-link-alt"></i></a></b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Drama or Thriller</h5>
          <b-list-group>
            <b-list-group-item class="movieList" v-for="(item, index) in dramaThriller">{{ item.movie }} <a :href="'https://www.imdb.com/title/' + item.imdb"><i class="fas fa-info-circle"></i><i class="fas fa-external-link-alt"></i></a></b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Displaying the list of movies by category -->
<script>
export default {
  name: "ImagesMovies",
  data() {
    return {
      comedy: [
        {
          id: 7,
          movie: "The Bachelor and the Bobby Soxer",
          imdb: "tt0039169"
        },
        {
          id: 8,
          movie: "The Big Picture",
          imdb: "tt0096926"
        },
        {
          id: 9,
          movie: "Joe Versus the Volcano",
          imdb: "tt0099892"
        },
        {
          id: 10,
          movie: "Lover Come Back",
          imdb: "tt0055100"
        },
        {
          id: 11,
          movie: "My Favorite Wife",
          imdb: "tt0029284"
        },
        {
          id: 12,
          movie: "Pillow Talk",
          imdb: "tt0053172"
        },
        {
          id: 13,
          movie: "Send Me No Flowers",
          imdb: "tt0058571"
        }
      ],
      romance: [
        {
          id: 14,
          movie: "The Bishop's Wife",
          imdb: "tt0039190"
        },
        {
          id: 15,
          movie: "She's Having A Baby",
          imdb: "tt0096094"
        }
      ],
      musical: [
        {
          id: 16,
          movie: "Strictly Ballroom",
          imdb: "tt0105488"
        }
      ],
      dramaThriller: [
        {
          id: 17,
          movie: "His Girl Friday",
          imdb: "tt0032599"
        },
        {
          id: 18,
          movie: "Shadow of a Doubt",
          imdb: "tt0036342"
        },
        {
          id: 19,
          movie: "Tremors",
          imdb: "tt0100814"
        }
      ],
    };
  }
};
</script>

<!-- Some simple styling to add color to header and some padding -->
<style>
.display-5 {
  font-weight: 700;
}

.moviesHeader {
  padding: 1rem;
}

.movieList {
  color: #000080;
  font-size: 1.5em;
}

.fa-info-circle {
  color: #f5c518;
  font-size: 1em;
}

@media screen and (max-width: 1025px) {
  .movieList {
    font-size: 1rem;
  }
}
</style>
<!-- test -->
