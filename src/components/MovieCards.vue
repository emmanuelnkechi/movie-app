<template>
<section>
  <div class="containe">
    <div class="row">
      <div class="col-md-3" v-for="(movie,index) in movies" :key="index">
 <img class="img-fluid" :src="'http://image.tmdb.org/t/p/w500/' +movie.poster_path" alt="" >
      </div>
    </div>
  </div>

  <div class="button-div1">
      <div class="button-div2">
        <button @click="loadMore()" >Load More</button>
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
      movies:[],
      page:1
    };

  },
  created(){
    this.allMovies()
  },
  methods: {
    allMovies(page=1) {
      axios.get('https://api.themoviedb.org/3/tv/popular?api_key=ff6c692c4f090dc865844a469f17ba27&language=en-US&page='+page)
    .then(response => {
      if(page !== 1) {
        response = response.data.results.filter(res => res.poster_path != null); 
        response.forEach(res => {
          this.movies.push(res);
        })
        // this.movies.concat()
      } else {
        this.movies = response.data.results.filter(res => res.poster_path != null);
      }
      
      // console.log(this.movies)
    })
    .catch(error => {
      console.log(error)
    })
    },

    loadMore() {
      this.page+=1;
      this.allMovies(this.page);
      
    },
  }
};
</script>
<style scoped>
.img-fluid {
  margin-top: 30px !important;
  border-radius: 20px !important;
  object-fit: cover !important;
  transition: all 0.3s ease 0s !important;
}

button {
  background: #313131;
  color: white;
  padding: 20px !important;
  width: 25% !important;
  border-radius: 40px !important;
  font-size: 25px;  
  border: none;
}
button:active {
    outline: none !important;
    border: none !important;
}
.button-div1 {
  text-align: center;
  margin-top: 25px;
  border: none
}


</style>
