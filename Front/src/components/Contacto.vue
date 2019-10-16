<template >
  <div>
    <!-- <Nav/> -->
    <!-- <img :src="require('../assets/logoDA.png')" class="imgEvento" />  -->
    <div class="eventoc">
      <h1 class="titulo">CONTACTANOS</h1>
      <div class="descripcionE">Escribinos por cualquier consulta o sugerencia
        <p>{{telefono}}</p>
        <p>{{mail}}</p>
      </div>
    </div>
    <!-- <Footer/> -->
  </div>
</template>


<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'

export default {
  components:{
    Nav,
    Footer
  },
  name: "Contacto",
  data() {
    return {
      telefono: "Telefono: 153456789",
      mail: "Mail: info.desafioapp@gmail.com"
    };
  }
};
</script>

<style>

</style>