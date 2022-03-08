<template>
  <div data-aos="flip-down" class="container-xxl pt-5 pb-3">
    <div class="container">
      <div class="text-center">
        <h5 class="titulo-freshly font-freshly text-center text-color">
          {{ titulo }}
        </h5>
        <h1 class="mb-5 font-freshly">{{ subtitulo }}</h1>
      </div>
      <div
        id="chefs"
        class="row g-4 justify-content-around"
        v-if="cocineros && cocineros.length"
      >
        <template
          v-for="(cocinero, index) in cocineros"
          :key="cocinero.nombre + index"
        >
          <div class="cocineros col-lg-3 col-md-6">
            <div class="text-center rounded overflow-hidden">
              <div class="rounded-circle overflow-hidden m-4">
                <img
                  class="img-fluid"
                  :src="cocinero.src"
                  :alt="cocinero.alt"
                />
              </div>
              <h5 class="mb-0">{{ cocinero.nombre }}</h5>
              <small class="p-2 m-2 text-muted fst-italic">{{
                cocinero.especialista
              }}</small>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "Cocinero",
  props: {
    titulo: {
      type: String,
      required: true,
    },
    subtitulo: {
      type: String,
      required: true,
    },
    cocineros: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style scoped>
.cocineros {
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
  height: calc(100% - 38px);
  transition: 0.5s;
  background: #eee;
}
.cocineros img {
  transition: 0.5s;
}
.cocineros:hover img {
  transform: scale(1.1);
}
.cocineros:hover {
  height: 100%;
}
</style>