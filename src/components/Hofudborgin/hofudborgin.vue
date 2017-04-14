<template>
  <div class="Sparkvellir">
  <h1>{{$t('message.capital_iceland')}}</h1>
    <div>
      <ul class="list-unstyled">
        <li v-for="vollur in vellir"> {{vollur}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hofudborgin',
  data () {
    return {
      msg: 'Sparkvellir á Reykjavíkursvæðinu',
      vellir: ['Álftanes', 'Garðabær', 'Hafnafjörður', 'Kópavogur', 'Reykjavík', 'Seltjarnarnes']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
