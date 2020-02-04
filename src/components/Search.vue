<template>
  <div>

    <nav>
      <div class="nav-div d-flex">

        <img src="../assets/images/magnifying-glass.svg" alt />
        <input type="search" v-model="filteredText" placeholder="Search Movies"/>
        <div >
        </div>

      </div>
    </nav>

  </div>
</template>


<script>
import axios from 'axios'
import { moviesMixin } from "@/moviesMixin"
export default {
  mixins: [moviesMixin],

  data() {
    return {
      filteredText: '',
      // movies: []
    }
  },
 
  methods: {
    search() {
    axios.get('https://api.themoviedb.org/3/search/tv?api_key=ff6c692c4f090dc865844a469f17ba27&language=en-US&query=' +this.filteredText +'&page=1')
    .then(response => {
      console.log('hello')
      console.log(response.data.results)
      this.$emit('editedMovies', response.data.results.filter(res => res.poster_path != null))
    })
    .catch(error => {
      console.log(error)
    })
    }
  },
  watch: {
    filteredText() {
      if(this.filteredText === ''){
        this.movies
      }
      else{
        this.search()
      }
    }
  }
}
</script>
<style scoped>
nav {
  background: #313131;
  padding: 30px 15px;
  /* margin-bottom: 700px; */
}
.nav-div {
    background: #8a8686;
    border-radius: 30px;
}
input {
  width: 100%;
  border: none;
  padding: 10px 10px;
  background: #8a8686;
  outline: none;
}

::placeholder {
  padding: 10px;
    color: #313131;
    /* font-weight: 30px; */
    font-size: 18px;
}
img {
  height: 30px;
  width: 60px;
  margin-top: 8px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 30px !important;
}
</style>