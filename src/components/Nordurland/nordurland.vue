<template>
  <div class="Sparkvellir">
  <h1>{{msg}}</h1>
    <div>
      <ul class="list-unstyled">
        <li v-for="vollur in vellir"> {{vollur}} </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sudurland',
  data () {
    return {
      msg: 'Sparkvellir á Norðurlandi',
      vellir: ['Akureyri', 'Arnarsh. og Hörgárbyggð', 'Blöndós', 'Dalvík', 'Grenivík', 'Hofsósi', 'Húnavatnshreppur', 'Húnavatnshreppur', 'Húnaþing vestra', 'Húsavík', 'Siglufirði', 'Skagaströnd', 'Skútustaðahreppur', 'Svalbarðsstrandarhreppur', 'Ólafsfjörður', 'Þórshöfn']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
