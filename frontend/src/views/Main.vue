<template>
  <section>
    <Hero
      :informacionBoton="{
        titulo: 'Nuestro menú',
        path: '/platos',
        claseIcono: 'fa-solid fa-utensils',
      }"
      :img="require('@/assets/img/hero.jpg')"
      titulo="Disfruta con los mejores platos"
      texto="En Freshly Foodie contarás con un ambiente cómodo y agradable, donde podrás disfrutar de increíbles platos de comida nacional e internacional, con los mejores productos del mercado. ¡Además, nos preocupamos por todo para que la pases agradable en nuestras instalaciones con tu familia y es por ello que tenemos precios accesibles para todos!"
      :soloTexto="false"
    />
    <ServiciosComponente
      :tipo="1"
      titulo="Nuestros Servicios"
      tituloDestacado="Freshly Foodie"
      texto="Brindar un servicio de calidad y económico ha sido la clave por más de 4 años en el sector gastronómico. 3 de nuestros servicios"
      :servicios="serviciosPrincipales"
    />
    <Nosotros
      titulo="Conoce más de Freshly Foodie"
      :informacionBoton="{
        titulo: '¡Conoce nuestros chefs!',
        path: '/nosotros',
        claseIcono: 'fa-solid fa-user-tie',
      }"
      :informacionNosotros="informacionNosotros"
      :descripciones="descripcionesNosotrosPrincipal"
      :imagenesNosotros="imagenesNosotros"
    />
    <ServiciosComponente
      :tipo="2"
      titulo="¿Por que elegir"
      tituloDestacado="Freshly Foodie?"
      texto="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos."
      :razones="razonesPrincipales"
    />
    <Ofertas
      titulo="Conoce nuestras"
      tituloDestacado="Mejores ofertas"
      descripcion="Tenemos para ti algunas de nuestras mejores ofertas pensadas para el bienestar económico y alimenticio."
      :enlaces="enlacesOfertas"
      :ofertas="ofertasDisponibles"
    />

    <MenuFavoritos
      titulo="Menú favorito"
      subtitulo="Platos favoritos por nuestros clientes"
      :enlacesFavoritos="enlacesFavoritos"
      :favoritos="favoritos"
    />
    <Clientes
      titulo="Clientes que han confiado"
      subtitulo="Nuestros clientes están satisfechos con nuestros servicios"
      :clientes="clientesOpiniones"
      :informacionBoton="{
        titulo: '¡Conoce nuestros platos!',
        path: '/platos',
        claseIcono: 'fa-solid fa-champagne-glasses',
      }"
    />
  </section>
</template>

<script>
import Hero from "../components/Hero.vue";
import ServiciosComponente from "../components/Servicios.vue";
import Nosotros from "../components/Nosotros.vue";
import Ofertas from "../components/Ofertas.vue";
import MenuFavoritos from "../components/MenuFavoritos.vue";
import Clientes from "../components/Clientes.vue";
import {
  serviciosPrincipales,
  descripcionesNosotrosPrincipal,
  imagenesNosotros,
  informacionNosotros,
  razonesPrincipales,
  enlacesOfertas,
  ofertasDisponibles,
  enlacesFavoritos,
  favoritos,
  clientesOpiniones,
} from "../constantes/main";
export default {
  components: {
    Hero,
    ServiciosComponente,
    Nosotros,
    Ofertas,
    MenuFavoritos,
    Clientes,
  },
  data() {
    return {
      serviciosPrincipales,
      descripcionesNosotrosPrincipal,
      imagenesNosotros,
      informacionNosotros,
      razonesPrincipales,
      enlacesOfertas,
      ofertasDisponibles,
      enlacesFavoritos,
      favoritos,
      clientesOpiniones,
    };
  },
  name: "Main",
  mounted() {
    document.title = "Los mejores platos | Freshly Foodie";
    window.scrollTo(0, 0);
  },
};
</script>
