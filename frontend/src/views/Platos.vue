<template>
  <section>
    <Hero
      titulo="Nuestro Menú"
      texto="Freshly Foodie nos encanta nuestro trabajo y esperamos que nuestros clientes reciban la mejor atención."
      :soloTexto="true"
      :informacionBoton="{
        titulo: 'Agendar cita',
        path: '/contacto',
        href: false,
        claseIcono: 'fa-solid fa-calendar-check',
      }"
    />
    <MenuFavorito
      :enlacesFavoritos="enlacesFavoritos"
      :favoritos="menuFreshly"
      :titulo="titulo"
      :subtitulo="subtitulo"
    />
      <Clientes 
      titulo="Las opiniones de nuestros clientes"
      subtitulo="Nos gusta saber lo que piensan nuestros clientes"
      :clientes="platosOpiniones"
      :esPar="false"
    />
  </section>
</template>

<script>
import Hero from "../components/Hero.vue";
import MenuFavorito from "../components/MenuFavoritos.vue";
import Clientes from "../components/Clientes.vue"
import { menuFreshly, enlacesFavoritos, platosOpiniones } from "../constantes/main";
export default {
  name: "Platos",
  data() {
    return {
      menuFreshly,
      enlacesFavoritos,
      platosOpiniones,
      titulo:
        "Conoce nuestros mejores platos. Te esperamos en nuestras sucursales. ",
      subtitulo: "¡No te lo pierdas!",
    };
  },
  components: {
    Hero,
    MenuFavorito,
    Clientes
  },
  mounted() {
    document.title = "Nuestro menú con el mejor sabor | Freshly Foodie";
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.hero-header {
  background: linear-gradient(#2b180fe6, #0f1e2be6),
    url(@/assets/img/bg-hero-platos.jpg);
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>