<template>
    <div>
        <div style="height:1000px; width:100%;" id="map"></div>
    </div>
</template>

<script>
import L from 'leaflet'
export default {
    data() {
        return {
            map:null
        }
    },
    mounted() {
        this.map = L.map('map').setView([51.505, -0.09], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

    }
}
</script>