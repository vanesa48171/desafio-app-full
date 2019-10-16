import Vue from 'vue'
import Router from 'vue-router'
import Formulario from './components/Formulario.vue'
import Contacto from './components/Contacto.vue'
import QuienesSomos from './components/QuienesSomos.vue'
import HomeDA from './components/HomeDA.vue'
import Evento from './components/Evento.vue'

Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'HomeDA',
      component: HomeDA
    },
    
    {
      path: '/Formulario',
      name: 'Formulario Inexistente',
      redirect: '/'
    },
    {
      path: '/Formulario/:id',
      name: 'Formulario',
      component: Formulario
    },
    {
      path: '/evento/:id',
      name: 'Evento',
      component: Evento
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: Contacto
    },
    {
      path: '/QuienesSomos',
      name: 'QuienesSomos',
      component: QuienesSomos
    },
      // component: () => import(/* webpackChunkName: "about" */ './components/Formulario.vue')
  ]
})
