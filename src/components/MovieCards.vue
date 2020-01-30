<template>
<section>
  
    <div class="flex-container">
      <div class="flex-item" v-for="(movie,index) in movies" :key="index">
      <img class="img-fluid" @click="showTrailer()" :src="'http://image.tmdb.org/t/p/w500/' +movie.poster_path" alt="" >
      </div>
    </div>
  
  <div class="loader" v-if="sendRequest">Loading...</div>

  <div class="button-div1" v-if="!sendRequest">
      <div class="button-div2">
        <button @click="loadMore()" >Load More</button>
      </div>
    </div>
    
</section>
  
</template>
<script>

import axios from 'axios'
import { moviesMixin } from '../moviesMixin'
export default {
  props: {},
  mixins: [moviesMixin],
  methods: {
    loadMore() {
      this.sendRequest = true;
      this.page+=1;
      this.allMovies(this.page);
    }
}
};
</script>
<style scoped>
div.flex-container {
  display: flex !important;
  flex-wrap: wrap !important;
  width: 100% !important;
}
.flex-item{
width: 20% !important;
padding-right: 20px !important;
}
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

.loader {
  font-size: 8px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(left, green 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, green 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, green 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, green 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, green 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.loader:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  }
.loader:after {
  background: #ffffff;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

</style>