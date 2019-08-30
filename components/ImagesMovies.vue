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
              <b-list-group-item class="movieList" v-for="(item, index) in comedy">{{ item.movie }} <i class="fas fa-info-circle"></i></b-list-group-item>
            </b-list-group>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Romance</h5>
          <b-list-group>
            <b-list-group-item class="movieList" v-for="(item, index) in romance">{{ item.movie }} <i class="fas fa-info-circle"></i></b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Musical</h5>
          <b-list-group>
            <b-list-group-item class="movieList" v-for="(item, index) in musical">{{ item.movie }} <i class="fas fa-info-circle"></i></b-list-group-item>
          </b-list-group>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Drama or Thriller</h5>
          <b-list-group>
            <b-list-group-item class="movieList" v-for="(item, index) in dramaThriller">{{ item.movie }} <i class="fas fa-info-circle"></i></b-list-group-item>
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
          movie: "The Bachelor and the Bobby Soxer"
        },
        {
          id: 8,
          movie: "The Big Picture"
        },
        {
          id: 9,
          movie: "Joe Versus the Volcano"
        },
        {
          id: 10,
          movie: "Lover Come Back"
        },
        {
          id: 11,
          movie: "My Favorite Wife"
        },
        {
          id: 12,
          movie: "Pillow Talk"
        },
        {
          id: 13,
          movie: "Send Me No Flowers"
        }
      ],
      romance: [
        {
          id: 14,
          movie: "The Bishop's Wife"
        },
        {
          id: 15,
          movie: "She's Having A Baby"
        }
      ],
      musical: [
        {
          id: 16,
          movie: "Strictly Ballroom"
        }
      ],
      dramaThriller: [
        {
          id: 17,
          movie: "His Girl Friday"
        },
        {
          id: 18,
          movie: "Shadow of a Doubt"
        },
        {
          id: 19,
          movie: "Tremors"
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
