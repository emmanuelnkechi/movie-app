<template>
  <div class="cover">
    <h1>Popular Movies</h1>
    <!-- <div class="flex-container"> -->
        <movie-cards/>
    <!-- </div> -->

   
  </div>
</template>

<script>
import MovieCards from "@/components/MovieCards.vue";
export default {
  components: {
    "movie-cards": MovieCards
  },
  data() {
    return {
     
    };
  },
  methods: {
   
  }
};
</script>
<style scoped>
.cover {
  margin: 25px;
}

</style>
