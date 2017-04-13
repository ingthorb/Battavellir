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
          position: {lat: 64.2539371, lng: -15.206126}
        },
        {
          // Seyðisfjarðarskóli
          position: {lat: 65.259282, lng: -14.006706}
        },
        {
          // Vopnafjarðarskóli
          position: {lat: 65.75812, lng: -14.824033}
        }, // Vesturland
        {
          // Akranes brekku
          position: {lat: 64.320609, lng: -22.082032}
        },
        {
          // akranes grunda
          position: {lat: 64.318662, lng: -22.054537}
        },
        {
          // Borgarbyggð Bifröst
          position: {lat: 64.766715, lng: -21.551825}
        },
        {
          // Borgarbyggð grunnsk borgarnes buið
          position: {lat: 64.766715, lng: -21.551825}
        },
        {
          // Borgarbyggð grunnsk hvanneyri
          position: {lat: 64.56297, lng: -21.764079}
        },
        {
          // Dalarbyggð
          position: {lat: 65.108309, lng: -21.766206}
        },
        {
          // Eyja og miklaholts
          position: {lat: 64.818807, lng: -22.415990}
        },
        {
          // Grundarfjarðarbær
          position: {lat: 64.922386, lng: -23.258229}
        },
        {
          // Snæfellsbær ólafsvík
          position: {lat: 64.896553, lng: -23.715160}
        },
        {
          // Snæfellsbær Hellissandi
          position: {lat: 64.918139, lng: -23.882585}
        },
        {
          // Stykkishólmsbær
          position: {lat: 65.073142, lng: -22.729916}
        },
        // Vestfirðir
        {
          // Bolungarvik
          position: {lat: 66.156003, lng: -23.254832}
        },
        {
          // Borðeyri
          position: {lat: 65.208941, lng: -21.099057}
        },
        {
          // Hnífsdal
          position: {lat: 66.108671, lng: -23.120833}
        },
        {
          // Flateyri
          position: {lat: 66.052297, lng: -23.516476}
        },
        {
          // Grunnsk ísafjarðar
          position: {lat: 66.073224, lng: -23.117079}
        },
        {
          // Grunnsk þingeyri
          position: {lat: 65.875208, lng: -23.487760}
        },
        {
          // Suðureyri
          position: {lat: 66.127544, lng: -23.519028}
        },
        {
          // Reykhólaskóli
          position: {lat: 65.448192, lng: -22.203377}
        },
        {
          // Strandabyggð
          position: {lat: 65.705757, lng: -21.674918}
        },
        {
          // Talknafjörður
          position: {lat: 65.629092, lng: -23.844083}
        },
        {
          // Vesturbyggð barðarströnd
          position: {lat: 65.520968, lng: -23.409109}
        },
        {
          // Bildurdalur
          position: {lat: 65.685450, lng: -23.602996}
        },
        {
          // Patreksfjorður
          position: {lat: 65.597515, lng: -24.000647}
        },
          // Suðurland
        {
          // Árborg Eyrabakki
          position: {lat: 63.857595, lng: -21.133302}
        },
        {
          // Árborg Stokkseyri
          position: {lat: 63.837307, lng: -21.063819}
        },
        {
          // Árborg Sunnulækjarskóli
          position: {lat: 63.924957, lng: -20.995375}
        },
        {
          // Árborg Vallaskóli
          position: {lat: 63.934502, lng: -20.994901}
        },
        {
          // Bláskógabyggð laugarvatn
          position: {lat: 64.217831, lng: -20.731316}
        },
        {
          // Bláskógabyggð Reykholt
          position: {lat: 64.174171, lng: -20.444678}
        },
        {
          // Borg grímsnes
          position: {lat: 64.074974, lng: -20.766496}
        },
        {
          // Flúðir
          position: {lat: 64.130360, lng: -20.323395}
        },
        {
          // Hveragerði
          position: {lat: 64.000037, lng: -21.183463}
        },
        {
          // Þorlakshofn
          position: {lat: 63.853325, lng: -21.380814}
        },
        {
          // Myrdalshreppur
          position: {lat: 63.416840, lng: -19.008900}
        },
        {
          // Hvolsvellur
          position: {lat: 63.752676, lng: -20.228745}
        },
        {
          // Hella
          position: {lat: 63.836181, lng: -20.400312}
        },
        {
          // Laugalandsskóli
          position: {lat: 63.915610, lng: -20.414668}
        },
        {
          // Kirkubæjarskóli
          position: {lat: 63.787216, lng: -18.055101}
        },
        {
          // þjórsárskóli
          position: {lat: 64.042234, lng: -20.247770}
        },
        {
          // Vestmannaeyjar Hamarsskoli
          position: {lat: 63.435226, lng: -20.286655}
        },
        {
          // Vestmannaeyjar barna
          position: {lat: 63.437343, lng: -20.273133}
        },
        {
          // Floaskoli
          position: {lat: 63.879842, lng: -20.753701}
        }
        ]
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
