<template>
  <div class="container-xxl position-relative p-0">
    <nav
      ref="navbar"
      class="
        navbar navbar-expand-lg navbar-dark
        bg-dark
        px-4 px-lg-5
        py-3 py-lg-0
      "
    >
      <span @click="$router.push('/')" class="navbar-brand p-0 pointer">
        <img :src="require('@/assets/img/logo.png')" alt="Logo">
      </span>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0 pe-4">
          <template v-for="enlace in enlaces" :key="enlace.path">
            <router-link
              :to="`${enlace.path}`"
              :class="[
                'nav-item',
                'nav-link',
                { active: estaActivo(enlace.path) },
              ]"
              > <i :class="enlace.claseIcono"></i>  {{ enlace.nombre }}</router-link
            >
          </template>
        </div>
        <div class="">
          <router-link to="/contacto" class="btn btn-primary"
            ><i class="fa-solid fa-paper-plane icono-boton"></i>  Contáctar</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { enlaces } from "../constantes/main";
export default {
  name: "Navbar",
  data() {
    return {
      enlaces,
    };
  },
  methods: {
    estaActivo(ruta) {
      return this.$route.path === ruta;
    },
    navbarFijo() {
      if (window.scrollY > 0) {
        this.$refs.navbar.classList.add("navbar-fijo");
      } else {
        this.$refs.navbar.classList.remove("navbar-fijo");
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.navbarFijo);
  },
};
</script>

<style>
.pointer {
  cursor: pointer;
}
.icono-boton::before{
  color: #fff !important;
}
</style>