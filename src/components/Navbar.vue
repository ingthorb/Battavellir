<template>
    <nav>
        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <router-link
                        tag="li"
                        v-for="(option, i) in navbarStrings"
                        :to="'/' + navbarRoutes[i]">
                    <a class="nav-link">
                        {{ option }}
                    </a>
                </router-link>

            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      navbarStrings: [
        'Sparkvellir',
        'Hafa samband'
      ],

      navbarRoutes: [
        '',
        'hafasamband'
      ]
    }
  },

  methods: {
  }
}
</script>

<style scoped>
    nav {
        background: #00FF7F;
      border: none;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    li a{
      display: block;
      color: black;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    a {
        color: #fff;
    }

</style>
