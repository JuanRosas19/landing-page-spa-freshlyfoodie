<template>
  <section>
    <Hero
      titulo="Conoce más de Freshly Foodie"
      texto="Freshly Foodie nos encanta nuestro trabajo y esperamos que nuestros clientes reciban la mejor atención.  Ofrecemos un ambiente seguro y cómodo para que disfrutes con los tuyos."
      :soloTexto="true"
      :informacionBoton="{
        titulo: 'Platos favoritos',
        path: '/platos',
        href: false,
        claseIcono: 'fa-solid fa-star',
      }"
    />
    <NosotrosComponente
      titulo="Nuestras sucursales"
      subtitulo="Brindando el mejor
  ambiente y experiencia de comida"
      :imagenesNosotros="nosotrosImagenes"
      :descripciones="nosotrosDescripciones"
    />
    <Servicios
      :tipo="2"
      titulo="Nuestros servicios"
      tituloDestacado=" ¿Por qué elegir Freshly Foodie?"
      :razones="nosotrosServicios"
    />
    <Cocineros
      titulo=" Nuestros chefs"
      subtitulo="Con una amplia experiencia en cocina"
      :cocineros="cocineros"
    />
  </section>
</template>

<script>
import Hero from "../components/Hero.vue";
import NosotrosComponente from "../components/Nosotros.vue";
import Servicios from "../components/Servicios.vue";
import Cocineros from "../components/Cocineros.vue";
import {
  nosotrosImagenes,
  nosotrosDescripciones,
  razonesPrincipales,
  nosotrosServicios,
  cocineros,
} from "../constantes/main";
export default {
  name: "Nosotros",
  data() {
    return {
      nosotrosImagenes,
      nosotrosDescripciones,
      razonesPrincipales,
      nosotrosServicios,
      cocineros,
    };
  },
  components: {
    Hero,
    NosotrosComponente,
    Servicios,
    Cocineros,
  },
  mounted() {
    document.title = "Conoce más de nosotros | Freshly Foodie";
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.hero-header {
  background: linear-gradient(#2b180fe6, #0f1e2be6),
    url(@/assets/img/bg-hero-nosotros.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>