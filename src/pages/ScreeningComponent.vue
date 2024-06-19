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
        <div class="d-flex">
                <div v-if="selectedScreening" class="cardWrap d-flex w-50 aligne-item-center debug" >
                        <div class="card cardLeft">
                            <h1 class="text-light">Cinema <span>Bianca</span></h1>
                            <div class="title">
                             <span>movie</span>
                            <h2>{{ selectedScreening.movie.title }}</h2>
                            </div>
                            <div class="name">
                                <span>sala</span>
                            <h2>
                                {{ selectedScreening.room.name }}
                            </h2>
                            </div>
                            <div class="seat">
                                <span>seat</span>
                            <h2>156</h2>
                            </div>
                            <div class="time">
                                <span>orario</span>
                            <h2>
                                {{ selectedScreening.screening_date }} / {{ selectedScreening.time_slot }}
                            </h2>
                            </div>
                        </div>
        <div v-if="selectedScreening" class="card cardRight">
            <div class="eye"></div>
            <div class="number">
            <h3>156</h3>
            <span>seat</span>
            <span>price</span>
            <h2>  </h2>
            </div>
            
            <div class="barcode"></div>
            
        </div>
        
        <div class="payment-form w-50 debug paga">
                <form @submit.prevent="confirmPayment">
                    <div class="form-group">
                        <label for="cardName">Nome del Titolare</label>
                        <input type="text" class="form-control" id="cardName" placeholder="Nome del Titolare" required>
                    </div>
                    <div class="form-group">
                        <label for="cardNumber">Numero della Carta</label>
                        <input type="text" class="form-control" id="cardNumber" placeholder="Numero della Carta" required>
                    </div>
                    <div class="form-group">
                        <label for="expiryDate">Data di Scadenza</label>
                        <input type="text" class="form-control" id="expiryDate" placeholder="MM/YY" required>
                    </div>
                    <div class="form-group">
                        <label for="cvv">CVV</label>
                        <input type="text" class="form-control" id="cvv" placeholder="CVV" required>
                    </div>
                    <button @click="showMessage = true" type="submit" class="btn btn-primary mt-5">Paga</button>
                </form>
            </div>
</div>
</div>
</div>
<strong v-if="showMessage" class="acquisto">L'acquisto è andato abuon fine</strong>
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
            selectedScreening: null,
            showMessage: false
            
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
        },
        
    },
    mounted() {
        this.getScreening();
    }
    
}



</script>
<style lang="scss" scoped>
</style>