<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Movie</th>
                    <th scope="col">Room</th>
                    <th scope="col">Screening</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="screening in screenings" :key="screening.id">
                    <td>{{ screening.movie.title }}</td>
                    <td>{{ screening.room.name }}</td>
                    <td>{{ screening.screening_date }} {{ screening.time_slot }}</td>
                    <td>
                        <button @click="selectScreening(screening)">
                            Acquista
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        
        <div v-if="selectedScreening" class="mt-5">
            <h2>Dettagli del Biglietto</h2>
            <p><strong>Film:</strong> {{ selectedScreening.movie.title }}</p>
            <p><strong>Descrizione:</strong> {{ selectedScreening.movie.description }}</p>
            <p><strong>Durata:</strong> {{ selectedScreening.movie.duration }}</p>
            <p><strong>Prezzo:</strong> €{{ selectedScreening.ticket_price }}</p>
            <button class="btn btn-secondary" @click="selectedScreening = null">Chiudi</button>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'ScreeningComponent',
    data() {
        return {
            store,
            screenings: [],
            selectedScreening: null
        }
    },
    methods: {
        getScreening() {
            axios.get(`${this.store.apiBaseUrl}/screenings`).then((res) => {
                console.log(res);
                this.screenings = res.data.results;
            });
        },
        selectScreening(screening) {
            this.selectedScreening = screening;
        }
    },
    mounted() {
        this.getScreening();
    }
}
</script>

<style lang="scss" scoped>

</style>