<template>
  <div>
    <b-navbar toggleable="lg" class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <b-navbar-brand class="navbar-brand logo_h" href="/">
        <img :src="require('../assets/logoDA.png')" class="logoPrincipal" alt />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <ul class="nav navbar-nav">
            <li class="nav-item active">
              <a class="nav-link">
                <router-link to="/" class="router-nav">HOME</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/QuienesSomos" class="router-nav">QUIENES SOMOS</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/Contacto" class="router-nav">CONTACTO</router-link>
              </a>
            </li>
          </ul>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>

</style>