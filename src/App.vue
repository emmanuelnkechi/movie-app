<template>
<div>
    <app-background/>
    <app-movie/>
</div>
</template>

<script>
import Background from '@/components/Background.vue'
import Movie from '@/components/Movie.vue'
export default {
    components:{
        'app-background': Background,
        'app-movie': Movie
    }
}
</script>

<style>


</style>
