<template>
  <div>
    <section class="bck">
      <app-header />
    </section>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
    components: {
        'app-header': Header
    },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.bck {
  background-image: url("../assets/images/bckgmv.jpg");
  background-size: cover;
  height: 700px;
}
</style>