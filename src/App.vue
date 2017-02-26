<template>
  <div id="content">
    <navbar></navbar>
    <sidebar class="sidebar"></sidebar>
    <router-view >
    </router-view>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import Navbar from './components/Navbar'
  export default {
    data: function () {
      return {}
    },
    components: {
      'sidebar': Sidebar,
      'navbar': Navbar
    }
  }
</script>

<style>
    h1, h2 {
      text-align: center;
      font-weight: normal;
    }
    li{
      text-align: center;
    }
  #Home{
    font-size: 36px;
  }
    html, body, #content {
        height: 100%;
    }
</style>

