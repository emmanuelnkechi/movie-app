import axios from 'axios'
export const moviesMixin = {
   data() {
       return {
    movies:[],
    page:1,
    sendRequest: false,
       }
   },
   created(){
    this.allMovies()
  },
methods: {
    allMovies(page=1) {
      axios.get('https://api.themoviedb.org/3/tv/popular?api_key=ff6c692c4f090dc865844a469f17ba27&language=en-US&page='+page)
    .then(response => {
        console.log(response)
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
     .finally(() => {
          this.sendRequest = false;
        });
    }
}
};