<template lang=html>
    <div class="container-with-arrow">
		<div class="volverAtras">
			<router-link to="/">
				<img :src="require('../assets/flecha.png')" class="flecha" />
				<div class="atras">Atrás</div>
			</router-link>
	  	</div> 
		<template v-if="!error">
			<!-- <img src="../assets/logocurso.png" class="imgEvento" /> -->
			<div class="eventoc">
				<div class="descripcionExtra"> 
					{{evento.descripcion}} 
					<h3 class="titulo">DETALLE DEL EVENTO</h3>
				</div>
			
				<div class="descripcionE">
					<p>Lugar: {{evento.nombre}}</p>
					<p>Direccion: {{evento.direccion}}</p>
					<p>Fecha: {{evento.fecha}}</p>
					<p>Hora: {{evento.hora}}</p>
				</div>
			
			</div>
			<div class="botonInscribir">
				<button type="submit" class="btn btn-celeste btn-insc"><router-link class="router-hover" :to="'/Formulario/'+$route.params.id">Inscribirme</router-link></button>
			</div>
		</template>
		<div v-else>{{error}}</div>
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
	name: 'Evento',
	data(){return {
		evento:{},
		error: null
		}
	},
	
	mounted() {
		const id = this.$route.params.id
		fetch('http://localhost:3000/eventos/'+ id, {mode:'cors'}) 
 		.then(res=> {
			return res.json();
 		}).then(data=> {
			if(typeof data === 'string')
				this.error = data 
			else{
				fetch('http://localhost:3000/lugares/'+data.idLugar, {mode:'cors'})
				.then(res => res.json())
				.then(direccion=> {
					this.evento = data;
					this.evento.fecha = new Date(this.evento.fecha).toLocaleDateString()
					if(typeof direccion === 'string')
						this.evento.direccion = "No hay direccion registrada" 
					else{		
						this.evento.direccion = `${direccion.nombre}, ${direccion.calle} ${direccion.nro}`
					}
				})
			}
		});
	}
	
}
</script>