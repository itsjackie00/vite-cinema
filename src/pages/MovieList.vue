<template>
    <div class="hero">
        
    </div>
    <div class="container m-auto">
        <div class="d-flex flex-wrap">
          <div class="m-2" style="width: 18rem;" v-for="movie in movies" :key="movie.id">
            <CardComponent :title="movie.title" :description="movie.description" :duration="movie.duration" :image="movie.image" />
          </div>
        </div>
      </div>

</template>


<script>
import axios from 'axios';
import { store } from '../store';
import CardComponent from '../components/CardComponent.vue';


export default {
    name: 'MovieList',
    components: {
        CardComponent

    },

    data() {
        return {
            params: null,
            store,
            movies: []
        }
    },

    methods: {
        getAllMovies() {
            axios.get(this.store.apiBaseUrl + '/movies', { params: this.params }).then((res) => {
                //console.log(res.data);
                this.movies = res.data.results;
                //se paginazione
                //this.posts = res.data.results.data;

            });
        },


    },
    created() {
        this.getAllMovies();

    },
    computed: {

    }

}
</script>

<style></style>
