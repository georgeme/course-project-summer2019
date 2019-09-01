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
            <b-card class="mt-2" v-for="detail in comedy" :key="detail.id" :header="detail.title">
              <b-list-group flush>
              <b-list-group-item><strong>Year: </strong>{{ detail.year }}</b-list-group-item>
              <b-list-group-item><strong>Genre: </strong>{{ detail.genre }}</b-list-group-item>
              <b-list-group-item><strong>Rated: </strong>{{ detail.rated }}</b-list-group-item>
            </b-list-group>

            <b-card-body>
              <b-card-title>Plot</b-card-title>
              <b-card-text>{{detail.plot}}</b-card-text>
            </b-card-body>

            <b-card-body>
              <b-card-title>Starring</b-card-title>
              <b-card-text>{{detail.actors}}</b-card-text>
            </b-card-body>

            <b-card-body>
              <b-card-title>Poster</b-card-title>
              <b-card-text><a :href="detail.poster" target="_blank"><i class="fas fa-image"></i><i class="fas fa-external-link-alt"></i></a></b-card-text>
            </b-card-body>
          </b-card>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Romance</h5>
          <b-card class="mt-2" v-for="detail in romance" :key="detail.id" :header="detail.title">
            <b-list-group flush>
              <b-list-group-item><strong>Year: </strong>{{ detail.year }}</b-list-group-item>
              <b-list-group-item><strong>Genre: </strong>{{ detail.genre }}</b-list-group-item>
              <b-list-group-item><strong>Rated: </strong>{{ detail.rated }}</b-list-group-item>
            </b-list-group>

            <b-card-body>
              <b-card-title>Plot</b-card-title>
              <b-card-text>{{detail.plot}}</b-card-text>
            </b-card-body>

            <b-card-body>
              <b-card-title>Starring</b-card-title>
              <b-card-text>{{detail.actors}}</b-card-text>
            </b-card-body>

            <b-card-body>
              <b-card-title>Poster</b-card-title>
              <b-card-text><a :href="detail.poster" target="_blank"><i class="fas fa-image"></i><i class="fas fa-external-link-alt"></i></a></b-card-text>
            </b-card-body>
          </b-card>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Musical</h5>
          <b-card class="mt-2" v-for="detail in musical" :key="detail.id" :header="detail.title">
            <b-list-group flush>
              <b-list-group-item><strong>Year: </strong>{{ detail.year }}</b-list-group-item>
              <b-list-group-item><strong>Genre: </strong>{{ detail.genre }}</b-list-group-item>
              <b-list-group-item><strong>Rated: </strong>{{ detail.rated }}</b-list-group-item>
            </b-list-group>

            <b-card-body>
              <b-card-title>Plot</b-card-title>
              <b-card-text>{{detail.plot}}</b-card-text>
            </b-card-body>

            <b-card-body>
              <b-card-title>Starring</b-card-title>
              <b-card-text>{{detail.actors}}</b-card-text>
            </b-card-body>

            <b-card-body>
              <b-card-title>Poster</b-card-title>
              <b-card-text><a :href="detail.poster" target="_blank"><i class="fas fa-image"></i><i class="fas fa-external-link-alt"></i></a></b-card-text>
            </b-card-body>
          </b-card>
        </div>

        <div class="col-xl-3 col-lg-3 col-sm-6 col-12 p-3">
          <h5 class="display-5">Drama or Thriller</h5>
          <b-card class="mt-2" v-for="detail in dramaThriller" :key="detail.id" :header="detail.title">
            <b-list-group flush>
              <b-list-group-item><strong>Year: </strong>{{ detail.year }}</b-list-group-item>
              <b-list-group-item><strong>Genre: </strong>{{ detail.genre }}</b-list-group-item>
              <b-list-group-item><strong>Rated: </strong>{{ detail.rated }}</b-list-group-item>
            </b-list-group>

            <b-card-body>
              <b-card-title>Plot</b-card-title>
              <b-card-text>{{detail.plot}}</b-card-text>
            </b-card-body>

            <b-card-body>
              <b-card-title>Starring</b-card-title>
              <b-card-text>{{detail.actors}}</b-card-text>
            </b-card-body>

            <b-card-body>
              <b-card-title>Poster</b-card-title>
              <b-card-text><a :href="detail.poster" target="_blank"><i class="fas fa-image"></i><i class="fas fa-external-link-alt"></i></a></b-card-text>
            </b-card-body>
          </b-card>
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
          title: "The Bachelor and the Bobby-Soxer",
          year: 1947,
          rated: "Approved",
          genre: "Comedy, Romance",
          actors: "Cary Grant, Myrna Loy, Shirley Temple, Rudy Vallee",
          plot: "A high school girl falls for a playboy artist, with screwball results.",
          poster: "https://m.media-amazon.com/images/M/MV5BZGMyNDVkZmMtYmFlYi00NmQ0LWI3MjEtNWU1OTA3ZjM1MjZhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
          id: 0
        },
        {
          title: "The Big Picture",
          year: 1989,
          rated: "PG-13",
          genre: "Comedy, Drama, Romance",
          actors: "Kevin Bacon, Emily Longstreth, J.T. Walsh, Jennifer Jason Leigh",
          plot: "Film school grad Nick Chapman thought his career was made after his award winning short film, but discovered Hollywood wasn't as easy as it seems.",
          poster: "https://m.media-amazon.com/images/M/MV5BZWIzZmQxMGYtM2U4YS00MGViLWE2NjMtNzA5MDU0YWE0ZDA1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          id: 1
        },
        {
          title: "Joe Versus the Volcano",
          year: 1990,
          rated: "PG",
          genre: "Comedy, Romance",
          actors: "Tom Hanks, Meg Ryan, Lloyd Bridges, Robert Stack",
          plot: "When a hypochondriac learns that he is dying, he accepts an offer to throw himself in a volcano at a tropical island, and along the way there, learns to truly live.",
          poster: "https://m.media-amazon.com/images/M/MV5BYWViOTc3M2ItZDI5Yy00OGMwLWEyYzMtNGY5NDBhMTkyZDkxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          id: 2
        },
        {
          title: "Lover Come Back",
          year: 1961,
          rated: "Approved",
          genre: "Comedy, Drama, Romance",
          actors: "Rock Hudson, Doris Day, Tony Randall, Edie Adams",
          plot: "A series of misunderstandings leaves an advertising executive with a campaign for a product which has not yet been invented, while he romances his rival in the guise of its inventor.",
          poster: "https://m.media-amazon.com/images/M/MV5BYzgyODI1YTAtMjFhNi00N2JlLTllNmUtNjIxZGFmZTU5MWUxXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
          id: 3
        },
        {
          title: "My Favorite Wife",
          year: 1940,
          rated: "Approved",
          genre: "Comedy, Romance",
          actors: "Irene Dunne, Cary Grant, Randolph Scott, Gail Patrick",
          plot: "Missing for seven years and presumed dead, a woman returns home on the day of her husband's second marriage.",
          poster: "https://m.media-amazon.com/images/M/MV5BZjNmYzI2MTgtODg1YS00YTI0LTlhNjYtYTIyOTFiZTkyMzFiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SX300.jpg",
          id: 4
        },
        {
          title: "Pillow Talk",
          year: 1959,
          rated: "Passed",
          genre: "Comedy, Romance",
          actors: "Rock Hudson, Doris Day, Tony Randall, Thelma Ritter",
          plot: "A man and a woman who share a party line cannot stand each other, but he has fun romancing her with his voice disguised.",
          poster: "https://m.media-amazon.com/images/M/MV5BMTQ5NDg1NzU1OV5BMl5BanBnXkFtZTgwMDQyODgxMTE@._V1_SX300.jpg",
          id: 5
        },
        {
          title: "Send Me No Flowers",
          year: 1964,
          rated: "Approved",
          genre: "Comedy, Drama, Romance",
          actors: "Rock Hudson, Doris Day, Tony Randall, Paul Lynde",
          plot: "A hypochondriac believes he is dying and makes plans for his wife which she discovers and misunderstands.",
          poster: "https://m.media-amazon.com/images/M/MV5BMjE1ODE2MzIzOF5BMl5BanBnXkFtZTgwNzIyNjIzMTE@._V1_SX300.jpg",
          id: 6
        },
      ],
      romance: [
        {
          title: "The Bishop's Wife",
          year: 1947,
          rated: "Not Rated",
          genre: "Comedy, Drama, Fantasy, Romance",
          actors: "Cary Grant, Loretta Young, David Niven, Monty Woolley",
          plot: "An angel in human form enters the life of a bishop in order to help him build a new cathedral and repair his fractured marriage.",
          poster: "https://m.media-amazon.com/images/M/MV5BNjU4ZTEwY2UtMDg2OS00YTgxLTlkZTQtY2M1ZGM1YTc0NWFmXkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg",
          id: 7
        },
        {
          title: "She's Having a Baby",
          year: 1988,
          rated: "PG-13",
          genre: "Comedy, Drama, Romance",
          actors: "Kevin Bacon, Elizabeth McGovern, Alec Baldwin, James Ray",
          plot: "Young newlyweds find out just how unprepared they are for their future together.",
          poster: "https://m.media-amazon.com/images/M/MV5BMzE2OTAyNTAxMF5BMl5BanBnXkFtZTgwNTUzNTcxMTE@._V1_SX300.jpg",
          id: 8
        },
      ],
      musical: [
        {
          title: "Strictly Ballroom",
          year: 1992,
          rated: "PG",
          genre: "Comedy, Drama, Music, Romance",
          actors: "Paul Mercurio, Tara Morice, Bill Hunter, Pat Thomson",
          plot: "A maverick dancer risks his career by performing an unusual routine and sets out to succeed with a new partner.",
          poster: "https://m.media-amazon.com/images/M/MV5BZGFkMDgwNTUtMTA5NC00YzMzLTljY2EtMWFiNjQ4OTBjMWUzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          id: 9
        },
      ],
      dramaThriller: [
        {
          title: "His Girl Friday",
          year: 1940,
          rated: "Passed",
          genre: "Comedy, Drama, Romance",
          actors: "Cary Grant, Rosalind Russell, Ralph Bellamy, Gene Lockhart",
          plot: "A newspaper editor uses every trick in the book to keep his ace reporter ex-wife from remarrying.",
          poster: "https://m.media-amazon.com/images/M/MV5BZDVmZTZkYjMtNmViZC00ODEzLTgwNDAtNmQ3OGQwOWY5YjFmXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_SX300.jpg",
          id: 10
        },
        {
          title: "Shadow of a Doubt",
          year: 1943,
          rated: "PG",
          genre: "Thriller",
          actors: "Teresa Wright, Joseph Cotten, Macdonald Carey, Henry Travers",
          plot: "A young woman discovers her visiting uncle may not be the man he seems to be.",
          poster: "https://m.media-amazon.com/images/M/MV5BYzUyOGE2Y2EtYzI2My00MDcxLWFmNzYtYjMzN2NiMmMzMzAzL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
          id: 11
        },
        {
          title: "Tremors",
          year: 1990,
          rated: "PG-13",
          genre: "Comedy, Horror",
          actors: "Kevin Bacon, Fred Ward, Finn Carter, Michael Gross",
          plot: "Natives of a small isolated town defend themselves against strange underground creatures which are killing them one by one.",
          poster: "https://m.media-amazon.com/images/M/MV5BMTEzNjkwMzIyMjZeQTJeQWpwZ15BbWU4MDI2NTU5ODYx._V1_SX300.jpg",
          id: 12
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

.fa-info-circle {
  color: #f5c518;
  font-size: 1em;
}

.card-header {
  font-size: 2rem;
  color: #000080;
}

@media screen and (max-width: 500px) {
  .card-header {
    font-size: 1.25rem;
  }
}

.movieList {
  color: #000080;
  font-size: 1.5em;
}

@media screen and (max-width: 1025px) {
  .movieList {
    font-size: 1rem;
  }
}

</style>
<!-- test -->
