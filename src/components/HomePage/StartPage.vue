<template>
  <div class="Sparkvellir">
    <h1>{{ msg }}</h1>
    <template>
      <gmap-map
        :center="center"
        :zoom="7"
        style="width: 500px; height: 300px"
        id="maps"
      >
        <gmap-marker
          v-for="m in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </template>
  </div>
</template>

<script>
  import * as VueGoogleMap from 'vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMap, {
    load: {
      key: 'AIzaSyDZhHi0zHdV-14VOapYHkAfNPYRv5p0QDA',
      v: '3'
      // libraries: 'places', //// If you need to use place input
    }
  })
  export default {
    name: 'Sparkvellir',
    data () {
      return {
        msg: 'Sparkvellir á Íslandi',
        center: {lat: 64.200520, lng: -21.888350},
        markers: [{
          // Austurland
          // Grunnskoli Borgarfjardar
          position: {lat: 65.527534, lng: -13.818085}
        }, {
          // Djúpavogshreppur
          position: {lat: 64.655189, lng: -14.279369}
        },
        {
          // Neskaupstaður Nesbakki
          position: {lat: 65.148795, lng: -13.668079}
        },
        {
          // Neskaupstaður Sverristún
          position: {lat: 65.148673, lng: -13.684490}
        },
        {
          // Eskifjörður
          position: {lat: 65.070327, lng: -14.011445}

        },
        {
          // Reyðarfjörður
          position: {lat: 65.034438, lng: -14.213494}

        },
        {
          // Fáskrúðsfjörður
          position: {lat: 64.932619, lng: -14.015711}
        },
        {
          // Stöðvafjörður
          position: {lat: 64.834017, lng: -13.871497}
        },
        {
          // Fljótdalshérað Brúarásskóli
          position: {lat: 65.439297, lng: -14.603484}
        },
        {
          // Fljótdalshérað Egilstaðarskóli
          position: {lat: 65.265024, lng: -14.395325}
        },
        {
          // Fljótdalshreppur
          position: {lat: 65.092574, lng: -14.741707}
        },
        {
          // Heppuskóli
          position: {lat: 64.251257, lng: -15.203924}
        },
        {
          // Seyðisfjarðarskóli
          position: {lat: 65.259282, lng: -14.006706}
        },
        {
          // Vopnafjarðarskóli
          position: {lat: 65.75812, lng: -14.824033}
        }]
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  #maps {
    left: 250px;
    top: 250px;
    position: absolute;
  }

  p {
    text-align: center;
  }

</style>
