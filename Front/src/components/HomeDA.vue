<template>
  <div>
    
    <b-jumbotron>
      <h1 class="comunidadMujeres">💡 COMUNIDAD DE MUJERES APASIONADAS POR LA TECNOLOGÍA</h1>
      <p class="VosSosParte">#VosSosParte</p>
    </b-jumbotron>
    
    <!--LISTADO DE EVENTOS-->
    <h1 class="proxEventos">Próximos Eventos</h1>
    <div class="contenedorEventos">
      <div class="row">
        <div class="col-sm-6" v-for="evento in eventos" :key="evento.id">
          <br />
          <div class="card border-info">
            <div class="card-header border-info">
              <font style="vertical-align: heredar;">{{evento.fecha}}</font>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{evento.nombre}}</h5>
              <button type="submit" class="btn btn-celeste"><router-link class="router-hover" :to="'/evento/'+ evento.idEvento">Ver Evento</router-link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  name: "HomeDA",
  data() {
    return {
      eventos: []
    };
  },
  methods: {
    fetchData() {
      fetch("http://localhost:3000/eventos", { mode: "cors" })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.eventos = data.map(item => {
            item.fecha = new Date(item.fecha).toLocaleDateString();
            return item;
          });

          console.log("Request successful", data);
        })
        .catch(error => {
          console.log("Request failed", error);
        });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
