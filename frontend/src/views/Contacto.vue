<template>
  <section>
    <Hero titulo="Contáctanos" :texto="texto" :soloTexto="true" />
    <FormularioContacto
      titulo="Contactanos "
      subtitulo="Reserva una cita y te responderemos a la brevedad"
    />
  </section>
</template>

<script>
import Hero from "../components/Hero.vue";
import FormularioContacto from "../components/FormularioContacto.vue";
export default {
  name: "Contacto",
  data() {
    return {
      texto:
        " Agenda una cita con nosotros y te ayudaremos a encontrar el mejor plato para ti.",
    };
  },
  components: {
    Hero,
    FormularioContacto,
  },
  mounted() {
    document.title = "Reserva una cita y disfruta | Freshly Foodie";
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.hero-header {
  background: linear-gradient(#2b180fe6, #0f1e2be6),
    url(@/assets/img/bg-hero-contacto.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>