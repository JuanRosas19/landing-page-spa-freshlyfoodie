<template>
  <section data-aos="zoom-in-up" class="container-xxl py-5">
    <div class="container">
      <div class="text-center">
        <h5
          class="titulo-freshly font-freshly text-center text-color fw-normal"
        >
          {{ titulo }}
        </h5>
        <h1 class="mb-5 font-freshly">{{ subtitulo }}</h1>
      </div>
      <div
        :class="[
          'row',
          esPar ? 'justify-content-around' : 'justify-content-center',
        ]"
        v-if="clientes && clientes.length"
      >
        <template
          v-for="(cliente, index) in clientes"
          :key="cliente.nombre + index"
        >
          <div class="bg-transparent border rounded p-2 m-2 col-md-4">
            <i :class="cliente.claseIcono"></i>
            <p>
              {{ cliente.testimonio }}
            </p>
            <div class="d-flex align-items-center">
              <img
                class="img-fluid flex-shrink-0 rounded-circle imagen-perfil"
                :src="cliente.imagen"
                :alt="cliente.alt"
              />
              <div class="ps-3">
                <h5 class="mb-1">{{ cliente.nombre }}</h5>
                <small class="text-muted fst-italic">{{
                  cliente.profesion
                }}</small>
              </div>
            </div>
          </div>
        </template>
        <div
          class="text-center mt-5"
          v-if="informacionBoton && Object.keys(informacionBoton).length"
        >
          <router-link
            :to="informacionBoton.path"
            class="btn btn-primary py-sm-3 px-sm-5 me-3 text-center icono-boton"
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
  name: "Clientes",
  props: {
    titulo: {
      type: String,
      required: true,
    },
    subtitulo: {
      type: String,
      required: true,
    },
    clientes: {
      type: Array,
      required: true,
    },
    informacionBoton: {
      type: Object,
      required: false,
    },
    esPar: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.imagen-perfil {
  width: 50px;
  height: 50px;
}
</style>
<style>
.icono-boton i::before {
  color: #fff !important;
}
</style>