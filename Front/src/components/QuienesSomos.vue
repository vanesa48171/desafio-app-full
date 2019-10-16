<template >
  <div>
    <!-- <Nav/> -->
    <div class="eventoc">
      <h2 class="titulo">{{titulo1}}</h2>
      <div class="descripcionE">{{descripcion1}}</div>
      <h2 class="titulo">{{titulo2}}</h2>
      <div class="descripcionE">{{descripcion2}}</div>
      <h2 class="titulo">{{titulo3}}</h2>
      <div class="descripcionE">{{descripcion3}}</div>
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
      titulo1:'QUIENES SOMOS',
      titulo2:'NUESTRO ENFOQUE',
      titulo3:'NUESTRO OBJETIVO',
      descripcion1: 'Desafío App es un proyecto con fines sociales que brinda talleres de programación, charlas de temas informáticos actuales y reuniones de vinculación universitaria dirigidos a mujeres jóvenes de entre 15 y 18 años, en la provincia de Córdoba. Esta organización está a cargo de estudiantes avanzadas de la carrera Ingeniería en Sistemas en la Universidad Tecnológica Nacional',
      descripcion2: 'Nuestro enfoque va dirigido a la profesionalización de las participantes ya que se les brindará información acerca de las diferentes carreras tecnológicas y les ayudará a elegir si prefieren estudiar una carrera de este tipo u otra, aplicando los conocimientos de tecnología adquiridos durante el taller y las charlas. ',
      descripcion3: 'Buscamos desarrollar el pensamiento lógico para la resolución de problemas utilizando un lenguaje de programación específico en el que las participantes adquirirán los conocimientos básicos que podrán aplicar en cualquier otro lenguaje. Durante el transcurso del taller se abordarán conceptos técnicos que servirán luego para el desarrollo de una aplicación mobile. '
    }
    }
  };
</script>

<style>
</style>