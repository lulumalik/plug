<template>
  <div id="container">
    <Map ref="map" />
    <AddCircle />
  </div>
</template>

<script>
import Map from './components/Map.vue'
import AddCircle from './components/AddCircle.vue'
export default {
  name: 'plug',
  components: {
    Map,AddCircle
  }
}
</script>

<style>
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
