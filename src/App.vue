<template>
<HeaderComponent />
<main>
<AppHome/>

<router-view> 
</router-view>
</main>
<FooterComponent /> 
</template>
<script>
import axios from 'axios';
import { store } from './store';
import AppHome from './pages/AppHome.vue';
import MovieList from './pages/MovieList.vue';
import ScreeningComponent from './pages/ScreeningComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
    name: 'App',
    components: {
        MovieList,
        AppHome,
        HeaderComponent,
        ScreeningComponent,
        FooterComponent
    },
  data() {
      return {
        store,
        movies: [],
        currentmovie: null,
      };
  },
  methods:{
    fetchMovies(){
        axios.get(this.store.apiBaseUrl+'/movies').then((res)=>{
            // console.log(res.data)
            
      })       
     },
  },
  mounted(){
     this.fetchMovies();

  }
}
</script>
<style lang="scss" scoped>
main{
  height: calc(100% - 160px);
  padding-top: 30px;
}

</style>
