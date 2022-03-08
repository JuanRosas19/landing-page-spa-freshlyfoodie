<template>
  <section
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    class="container-xxl py-5"
  >
    <div class="container">
      <div class="row g-5 align-items-center">
        <div class="col-lg-6">
          <div class="row g-3">
            <template
              v-for="(imagen, index) in imagenesNosotros"
              :key="imagen + index"
            >
              <div class="col-6 text-start">
                <img
                  class="img-fluid rounded w-100"
                  :src="imagen.src"
                  :alt="imagen.alt"
                />
              </div>
            </template>
          </div>
        </div>
        <div class="col-lg-6">
          <h5
            class="titulo-freshly font-freshly text-start text-color fw-normal"
          >
            {{ titulo }}
          </h5>
          <h1 class="mb-4 font-freshly">{{ subtitulo }}</h1>
          <template v-for="(descripcion, index) in descripciones" :key="index">
            <p class="lead my-4">{{ descripcion.descripcion }}</p>
          </template>
          <div class="row g-4 mb-4">
            <template
              v-for="(informacion, index) in informacionNosotros"
              :key="index"
            >
              <div class="col-sm-6">
                <div
                  class="
                    d-flex
                    align-items-center
                    border-start border-5 border-primary
                    px-3
                  "
                >
                  <h1
                    class="flex-shrink-0 display-5 text-color mb-0"
                    data-toggle="counter-up"
                  >
                    {{ informacion.numero }}
                  </h1>
                  <div class="ps-4">
                    <p class="mb-0">{{ informacion.titulo }}</p>
                    <h6 class="text-uppercase mb-0">
                      {{ informacion.subtitulo }}
                    </h6>
                  </div>
                </div>
              </div>
            </template>
          </div>
          <router-link
            v-if="informacionBoton && Object.keys(informacionBoton).length"
            class="btn btn-primary py-3 px-5 mt-2 icono-boton"
            :to="informacionBoton.path"
            >{{ informacionBoton.titulo }}
            <i :class="informacionBoton.claseIcono"></i>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
export default {
  name: "NosotrosComponente",
  props: {
    titulo: {
      type: String,
      required: true,
      default: "Nosotros",
    },
    subtitulo: {
      type: String,
      default: "El mejor lugar para comer",
    },
    descripciones: {
      type: Array,
      required: true,
    },
    informacionBoton: {
      type: Object,
      required: false,
    },
    informacionNosotros: {
      type: Array,
      required: false,
    },
    imagenesNosotros: {
      type: Array,
      required: false,
      default: () => [
        {
          src: require("@/assets/img/restaurante-1.jpg"),
          alt: "Restaurante 1",
        },
        {
          src: require("@/assets/img/restaurante-2.jpg"),
          alt: "Restaurante 2",
        },
        {
          src: require("@/assets/img/comida-1.jpg"),
          alt: "Comida 1",
        },
        {
          src: require("@/assets/img/comida-2.jpg"),
          alt: "Comida 2",
        },
      ],
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.icono-boton::before {
  color: #fff !important;
}
</style>