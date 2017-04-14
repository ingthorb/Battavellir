<template>
  <div class="Sparkvellir">
  <h1>{{$t('message.western_iceland')}}</h1>
    <div>
      <ul class="list-unstyled">
        <li v-for="vollur in vellir"> {{vollur}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vesturland',
  data () {
    return {
      msg: 'Sparkvellir á Vesturlandi',
      vellir: ['Akranes', 'Bifröst', 'Bolungarvík', 'Borgarnes', 'Bæjarhreppur', 'Búðardal', 'Eyja- og Miklaholtshreppur', 'Grundarfjarðarbær', 'Hvanneyri', 'Reykólahreppur', 'Snæfellsbær', 'Strandabyggð', 'Stykkishólmur', 'Tálknafjarðarhreppur', 'Vesturbyggð', 'Ísafjörður']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
