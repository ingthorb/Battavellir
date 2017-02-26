<template>
  <div class="Sparkvellir">
    <h1>{{ msg }}</h1>
    <div>
    <p>Þessi síða inniheldur alla sparkvelli á landinu</p>
    </div>
    <div id="map">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sparkvellir',
  data () {
    return {
      msg: 'Sparkvellir á Íslandi'
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
p {
text-align: center;
}
#map {
height: 400px;
width: 100%;
}
</style>
