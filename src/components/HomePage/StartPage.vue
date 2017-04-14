<template>
  <div class="Sparkvellir">
    <div class="text-center">
    <h1>{{$t("message.welcome_headline")}}</h1>
    <h3>{{$t("message.welcome_message")}}</h3>
    <template>
      <div class="container container-table">
        <div class="row vertical-center-row">
          <div class="col-md-3 col-md-offset-2">
      <gmap-map
        :center="center"
        :zoom="6"
        style="width: 650px; height: 400px"
      >
        <gmap-marker
          v-for="m in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
          </div>
          </div>
      </div>
    </template>
      </div>
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
        center: {lat: 65.000520, lng: -19.088350},
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
        },
        {        // hofuðborgarsvæðið

          // Álftanesskóli
          position: {lat: 64.104646, lng: -22.017081}
        },
        {
          // Sjálandsskóli
          position: {lat: 64.092948, lng: -21.936721}
        },
        {
          // Setbergsskóli
          position: {lat: 64.065323, lng: -21.931424}
        },
        {
          // Víðistaðaskóli
          position: {lat: 64.075251, lng: -21.957850}
        },
        {
          // Öldutúnsskóli
          position: {lat: 64.062701, lng: -21.946441}
        },
        {
          // Flensborgarskól
          position: {lat: 64.093169, lng: -21.908021}
        },
        {
          // Digranesskóli
          position: {lat: 64.110799, lng: -21.863081}
        },
        {
          // Hjallaskóli
          position: {lat: 64.110616, lng: -21.864676}
        },
        {
          // Kársnesskóli
          position: {lat: 64.109452, lng: -21.922667}
        },
        {
          // Kópavogsskóli
          position: {lat: 64.110900, lng: -21.900555}
        },
        {
          // Lindaskóli
          position: {lat: 64.099336, lng: -21.868094}
        },
        {
          // Salaskóli
          position: {lat: 64.090838, lng: -21.855459}
        },
        {
          // Smáraskóli
          position: {lat: 64.102958, lng: -21.895656}
        },
        {
          // Snælandsskóli
          position: {lat: 64.115765, lng: -21.878175}
        },
        {
          // Vatnsendaskóli
          position: {lat: 64.089093, lng: -21.805284}
        },
        {
          // Lágafellsskóli
          position: {lat: 64.165968, lng: -21.724306}
        },
        {
          // Ártúnsskóli
          position: {lat: 64.120040, lng: -21.821488}
        },
        {
          // Breiðholtsskóli
          position: {lat: 64.107254, lng: -21.835198}
        },
        {
          // Hamraskóli
          position: {lat: 64.137994, lng: -21.812881}
        },
        {
          // Hlíðaskóli
          position: {lat: 64.130927, lng: -21.910084}
        },
        {
          // Hólabrekkuskóli
          position: {lat: 64.107200, lng: -21.818239}
        },
        {
          // Klébergsskóli
          position: {lat: 64.237371, lng: -21.825685}
        },
        {
          // Korpuskóli
          position: {lat: 64.156445, lng: -21.755219}
        },
        {
          // Langholtsskóli
          position: {lat: 64.138261, lng: -21.861127}
        },
        {
          // Laugarnesskóli
          position: {lat: 64.144834, lng: -21.884109}
        },
        {
          // Seljaskóli
          position: {lat: 64.095118, lng: -21.839311}
        },
        {
          // Hofgarða
          position: {lat: 64.157233, lng: -22.000731}
        },
        {
          // Akureyri Brekkuskóli
          position: {lat: 65.678624, lng: -18.095476}
        },
        {
          // Akureyri Giljaskóli
          position: {lat: 65.686172, lng: -18.134628}
        },
        {
          // Akureyri Glerárskóli
          position: {lat: 65.689034, lng: -18.116745}
        },
        {
          // Akureyri Lundarskóli
          position: {lat: 65.675611, lng: -18.114134}
        },
        {
          // Akureyri Naustaskóli
          position: {lat: 65.665011, lng: -18.098491}
        },
        {
          // Akureyri Oddeyrarskóli
          position: {lat: 65.689019, lng: -18.092761}
        },
        {
          // Akureyri Síðuskóli
          position: {lat: 65.692802, lng: -18.137171}
        },
        {
          // Þelamerkurskóli
          position: {lat: 65.742877, lng: -18.277477}
        },
        {
          // Dalvíkurskóla
          position: {lat: 65.968709, lng: -18.530033}
        },
        {
          // Siglufirði
          position: {lat: 66.150349, lng: -18.905393}
        },
        {
          // Grenivíkurskóli
          position: {lat: 65.948787, lng: -18.172403}
        },
        {
          // Borgarhólsskóli
          position: {lat: 66.045480, lng: -17.336927}
        },
        {
          // Ólafsfjörður
          position: {lat: 66.070314, lng: -18.652770}
        },
        {
          // Skútustaðahreppur
          position: {lat: 65.642426, lng: -16.894967}
        },
        {
          // Svalbarðsstrandarhreppur
          position: {lat: 65.748861, lng: -18.081112}
        },
        {
          // Þórshafnarhreppur
          position: {lat: 66.201671, lng: -15.338072}
        },
        {
          // Blönduós
          position: {lat: 65.659228, lng: -20.281708}
        },
        {
          // Húnavallaskóli
          position: {lat: 65.540968, lng: -20.207562}
        },
        {
          // Grunnsk. Húnaþ.v og Hvammst.
          position: {lat: 65.399613, lng: -20.942106}
        },
        {
          // Grunnsk. íþróttah. Skagaströnd
          position: {lat: 65.824389, lng: -20.303919}
        },
        {
          // Grunnsk. Hofsósi
          position: {lat: 65.897699, lng: -19.409377}
        },
        {
          // Hólar
          position: {lat: 65.733512, lng: -19.113186}
        },
        {
          // Varmahlíðarskóli
          position: {lat: 65.550999, lng: -19.447991}
        },
        {
          // Gerðarskóli
          position: {lat: 64.072235, lng: -22.652158}
        },
        {
          // Grunnsk. Grindavíkur
          position: {lat: 63.840117, lng: -22.439947}
        },
        {
          // Akurskóli reykjanesbær
          position: {lat: 63.974906, lng: -22.513036}
        },
        {
          // Grunnskólinn Sandgerði
          position: {lat: 64.034041, lng: -22.699082}
        },
        {
          // Grunnskólinn Vogum
          position: {lat: 63.982778, lng: -22.387479}
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
    margin-left: 250px;
    margin-top: auto;
    position: absolute;
  }

  p {
    text-align: center;
  }
#inner {
  width: 50%;
  margin: 0 auto;
}
</style>
