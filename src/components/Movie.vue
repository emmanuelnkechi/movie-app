<template>
  <div class="cover">
    <h1>Popular Movies</h1>
    <!-- <div class="flex-container"> -->
        <movie-cards />
    <!-- </div> -->

    <div class="button-div1">
      <div class="button-div2">
        <button>Load More</button>
      </div>
    </div>
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

.flex-container {
  display: flex;
  flex-direction: row;
  /* align-content: space-around; */
  flex-wrap: wrap;
}
.flex-item {
  width: 20%;
}
button {
  background: #313131;
  color: white;
  padding: 20px !important;
  width: 25% !important;
  border-radius: 40px !important;
  font-size: 25px;
}
.button-div1 {
  text-align: center;
  margin-top: 25px;
}

</style>
