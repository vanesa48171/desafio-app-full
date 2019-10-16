<template>
  <div>
    <Nav/>
    <router-view></router-view>
    <Footer/>

  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import HomeDA from './components/HomeDA.vue'
import Footer from './components/Footer.vue'
import Contacto from './components/Contacto.vue'
import QuienesSomos from './components/QuienesSomos.vue'
import Evento from './components/Evento.vue'

export default {
  name: 'App',
  components: {
    HomeDA,
    Footer,
    Nav
  }
}
</script>

<style>
</style>