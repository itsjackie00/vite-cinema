<template>
    <div class="container">
        <h1>Contact us</h1>
        <p class="pt-3">Siamo felici di rispondere alle tue domande e ai tuoi commenti! Non esitare a contattarci!</p>
        <div>
            <i class="fa-solid fa-envelope"></i>
            <span>Email:</span> <br>
            <p><a href="mailto:contact@example.com">contact@example.com</a></p>
        </div>
        <div class="pt-3">
            <i class="fa-solid fa-phone"></i> 
            <span>Telefono</span>
            <p ><a href="tel:+1 5589 55488 55">+1 5589 55488 55</a></p>     
        </div>
        <div class="pt-3">
            <i class="fa-solid fa-location-dot"></i>
            <span>Indirizzo</span> <br>
            <p>Vieni a trovarci al Cinema del Borgo, Via del Cinema 123, 24010 Borgo (BG), Italia.</p>

        </div>
                    
    </div>
    
</template>

<script>
export default {
    name: 'ContactComponent',
}
</script>

<style lang="scss" scoped>
span{
    font-weight: bolder;
    padding-left: 5px;
}
</style>