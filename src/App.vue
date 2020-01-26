<template>
<div>
    <app-background/>
    <app-search/>
    <app-movie/>
</div>
</template>

<script>
import Background from '@/components/Background.vue'
import Search from '@/components/Search.vue'
import Movie from '@/components/Movie.vue'
export default {
    components:{
        'app-background': Background,
        'app-search': Search,
        'app-movie': Movie
    }
}
</script>

<style>


</style>
