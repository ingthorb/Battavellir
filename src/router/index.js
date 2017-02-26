import Vue from 'vue'
import Router from 'vue-router'
import Austurland from 'components/Austurland/austurland'
import Sudurland from 'components/Sudurland/sudurland'
import Vesturland from 'components/Vesturland/vesturland'
import Nordurland from 'components/Nordurland/nordurland'
import Hofudborgin from 'components/Hofudborgin/hofudborgin'
import Contacts from 'components/Contact/contact'
import Index from 'components/HomePage/StartPage'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Index
    },
    {
      path: '/sudurland',
      name: 'Sudurland',
      component: Sudurland
    },
    {
      path: '/vesturland',
      name: 'Vesturland',
      component: Vesturland
    },
    {
      path: '/austurland',
      name: 'Austurland',
      component: Austurland
    },
    {
      path: '/nordurland',
      name: 'Nordurland',
      component: Nordurland
    },
    {
      path: '/hofudborgin',
      name: 'Hofudborgin',
      component: Hofudborgin
    },
    {
      path: '/hafasamband',
      name: 'Hafa Samband',
      component: Contacts
    }

  ]
})
