<template>
  <div>
    <app-search @editedMovies="movies = $event" />

    <div class="cover">
      <h1>Popular Movies</h1>
      <movie-cards :movies="movies" :page = "page" @loadMore="loadMore($event)" :sendRequest="sendRequest" />
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import MovieCards from "@/components/MovieCards.vue";
import { moviesMixin } from "../moviesMixin";
export default {
  mixins: [moviesMixin],
  components: {
    "app-search": Search,
    "movie-cards": MovieCards
  },
  data() {
    return {};
  },
  created() {
    this.allMovies();
  },
  methods: {
    loadMore(page) {
      console.log(page);
      this.sendRequest = true;
      this.allMovies(page);
    }
  }
};
</script>
<style scoped>
.cover {
  margin: 25px;
}
</style>
