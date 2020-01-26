<template>
<section>
  <div class="containe">
    <div class="row">
      <div class="col-md-3" v-for="(movie,index) in movies" :key="index">
 <img class="img-fluid" :src="'http://image.tmdb.org/t/p/w500/' +movie.poster_path" alt="" >
      </div>
    </div>
  </div>

 
</section>
  
</template>
<script>
import axios from 'axios'
export default {
  props: {},
  data() {
    return {
      movies:[]
    };

  },
  created(){
    this.allMovies()
  },
  methods: {
    allMovies() {
      axios.get('https://api.themoviedb.org/3/tv/popular?api_key=ff6c692c4f090dc865844a469f17ba27&language=en-US&page=1')
    .then(response => {
      this.movies = response.data.results;
      console.log(this.movies)
    })
    .catch(error => {
      console.log(error)
    })
    }
  }
};
</script>
<style scoped>
.img-fluid {
  margin-top: 20px !important;
  border-radius: 20px !important;
  object-fit: cover;
}
</style>
