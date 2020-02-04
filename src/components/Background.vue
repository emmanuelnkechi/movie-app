<template>
  <div>
    <section
      :style="{backgroundImage: 'url(' + poster + movies[4].poster_path + ')',
    height: '600px',
    backgroundSize: 'cover'}"
    >
      <app-header />
      <div class="flex-container">
        <div class="flex-item">
          <h1>{{movies[4].name}}</h1>
          <p>{{movies[4].overview}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import { moviesMixin } from "@/moviesMixin";
export default {
  components: {
    "app-header": Header
  },
  mixins: [moviesMixin],
  data() {
    return {
      poster: "http://image.tmdb.org/t/p/w500/"
    };
  },
  methods: {},
  mounted() {
    this.allMovies();
  }
};
</script>

<style scoped>
.flex-container {
  margin-bottom: 60px;
  display: flex;
  margin-left: 50px;
  max-width: 50%;
  height: 400px;
  align-items: flex-end;
  color: rgb(255, 255, 255);
  line-height: 11px;
  font-family: Abel, sans-serif;
}

p {
  font-size: 15px;
  line-height: 26px;
  margin-top: 10px;
}
</style>