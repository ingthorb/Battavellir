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
      <div class="navbar__right">
      <a href="#" @click="changeLanguage('is')">
        {{$t('message.language_is')}}
        <i class="fa fa-language" aria-hidden="true"></i>
      </a>
      <a href="#" @click="changeLanguage('en')">
        {{$t('message.language_en')}}
        <i class="fa fa-language" aria-hidden="true"></i>
      </a>
    </div>
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
      changeLanguage (language) {
        if (language === 'is') {
          this.$i18n.locale = 'is'
        } else {
          this.$i18n.locale = 'en'
        }
      }
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

  li a {
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
