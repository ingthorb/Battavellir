<template>
    <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
      <div>
      <ul class="list-unstyled" >
        <router-link
              tag="li"
              v-for="(option, i) in lond"
              @mouseover.native="hover(routes[i])"
              @click.native="selectedOption = option"
              :to="'/' + routes[i]">
              <a class="nav-link"
                  :class="{ active: selectedOption === option }">
                  {{ option }}
              </a>
        </router-link>
      </ul>
    </div>
    </nav>
</template>

<script>
export default {
  name: 'Sparkvellir',
  data () {
    return {
      active: false,
      activeTown: '',
      selectedOption: '',
      lond: ['Austurland', 'Höfuðborgarsvæðið', 'Norðurland', 'Suðurland', 'Vesturland'],
      routes: ['austurland', 'hofudborgin', 'nordurland', 'sudurland', 'vesturland'],
      sudurland: ['Árborg', 'Bláskógabyggð', 'Grímsnes og Grafningshreppur', 'Hrunamannahreppur Flúðir', 'Hveragerði', 'Mýrdalshreppur', 'Hvolsvöllur', 'Hella', 'Laugalandsskóli', 'Kirkjubær', 'Skeiða- og Gnúpverjahreppur', 'Vestmannaeyjar', 'Villingaholtshreppur'],
      vesturland: ['Bolungarvík', 'Bæjarhreppur', 'Ísafjörður', 'Reykólahreppur', 'Strandabyggð', 'Tálknafjarðarhreppur', 'Vesturbyggð', 'Akranes', 'Bifröst', 'Borgarnes', 'Hvanneyri', 'Búðardal', 'Eyja- og Miklaholtshreppur', 'Grundarfjarðarbær', 'Snæfellsbær', 'Stykkishólmur'],
      nordurland: ['Akureyri', 'Arnarsh. og Hörgárbyggð', 'Dalvík', 'Siglufirði', 'Grenivík', 'Húsavík', 'Ólafsfjörður', 'Skútustaðahreppur', 'Svalbarðsstrandarhreppur', 'Þórshöfn', 'Blöndós', 'Húnavatnshreppur', 'Húnavatnshreppur', 'Húnaþing vestra', 'Skagaströnd', 'Hofsósi'],
      austurland: ['Borgarfjarðarhreppur', 'Djúpavogshreppur', 'Fjarðabyggð', 'Fljótdalshérað', 'Fljótdalshreppur', 'Hornafjörður', 'Seyðisfjörður', 'Vopnafjörður', 'Bifröst'],
      hofudborgin: ['Álftanes', 'Garðabær', 'Hafnafjörður', 'Kópavogur', 'Reykjavík', 'Seltjarnarnes']
    }
  },
  methods: {
    hover (data) {
      this.active = !this.active
      this.activeTown = data
      console.log(this.activeTown)
        // TODO: Make rest of list show
    }
  }
}
</script>

<style scoped>
    nav {
        background-color: #DCDCDC;
        height: 100%;
        float: left;
    }
    ul {
      margin-top: 30px;
    }
    li{
      margin: 0 0 10px 0;
    }
    a {
        color: black;
    }
    a:hover {
        background-color: #666;
    }
</style>
