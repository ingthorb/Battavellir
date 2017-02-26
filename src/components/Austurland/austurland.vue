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
      msg: 'Sparkvellir á Austurlandi',
      vellir: ['Bifröst', 'Borgarfjarðarhreppur', 'Djúpavogshreppur', 'Fjarðabyggð', 'Fljótdalshreppur', 'Fljótdalshérað', 'Hornafjörður', 'Seyðisfjörður', 'Vopnafjörður']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
