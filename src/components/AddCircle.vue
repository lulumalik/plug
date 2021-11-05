<template>
  <div>
    <button @click="addCircle">Add Circle</button>
  </div>
</template>

<script>
import L from "leaflet";
import 'leaflet-draw/dist/leaflet.draw.js'
import 'leaflet-draw/dist/leaflet.draw.css'
export default {
  mounted() {},
  methods: {
    addCircle() {
      //   L.circle([51.508, -0.11], {
      //     color: "red",
      //     fillColor: "#f03",
      //     fillOpacity: 0.5,
      //     radius: 500
      //   }).addTo(window.map);
      var drawnItems = new L.FeatureGroup();
      window.map.addLayer(drawnItems);
      var drawControl = new L.Control.Draw({
        edit: {
          featureGroup: drawnItems
        }
      });
      window.map.addControl(drawControl);
    }
  }
};
</script>