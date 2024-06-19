<template>
   

        <div class="card" style="height: 400px;">
            <img :src="getImage" class="card-img-top" :alt="title">
            <div class="card-body">
                <h5 class="card-title">{{ title }}</h5>
                <p class="card-text">{{ description }}</p>
                <p> Duration: {{ duration }}</p>
               
            </div>
        </div>

</template>


<script>
import { store } from '../store';
export default {
    name: 'CardComponent',
    props: ['id', 'title', 'image', 'description', 'duration'],
    data() {
        return {
            store,
            movie: this.item,

        }
    },
    methods: {

    },
    computed: {
        getImage() {
            return this.store.imgBasePath + this.image
        }
    },
    mounted() {

    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
p {
    margin-bottom: 0.1rem;
}

.card img {
    aspect-ratio: 1/1;
}
</style>