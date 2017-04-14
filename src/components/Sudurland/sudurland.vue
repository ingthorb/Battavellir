<template>
  <div class="Sparkvellir">
  <h1>{{$t('message.southern_iceland')}}</h1>
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
      msg: 'Sparkvellir á Suðurlandi',
      vellir: ['Árborg', 'Bláskógabyggð', 'Grímsnes og Grafningshreppur', 'Hella', 'Hrunamannahreppur Flúðir', 'Hveragerði', 'Hvolsvöllur', 'Kirkjubær', 'Laugalandsskóli', 'Mýrdalshreppur', 'Skeiða- og Gnúpverjahreppur', 'Vestmannaeyjar', 'Villingaholtshreppur']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
