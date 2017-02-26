<template>
  <div class="Sparkvellir">
  <h1>{{msg}}</h1>
    <div id="input">
      <label>
      <input v-model="user.nafn"  type="text" placeholder="Nafn">
      </label>
      <label>
        <input v-model="user.netfang" type="email" placeholder="Netfang">
      </label>
        <textarea rows="10" id="lysing" placeholder="Lýsing" >
      </textarea>
      <button class="btn btn-lg btn-primary btn-block"
            @click="sendEmail">Senda
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hofudborgin',
  data () {
    return {
      msg: 'Hafa samband',
      user: {
        nafn: '',
        netfang: ''
      }

    }
  },
  methods: {
    sendEmail () {

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
  textarea {
    width: 60%;
    resize: none;
}
  h1 {
    margin-bottom: 60px;
  }
  label {
    margin-bottom: 20px;
}
  button {
    margin-top: 40px;
  }
</style>
