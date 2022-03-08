<template>
  <section class="container-xxl py-5 bg-dark hero-header mb-5 animate__animated animate__pulse">
    <div class="container my-5 py-5">
      <div class="row align-items-center g-5" v-if="!soloTexto">
        <div class="col-lg-6 text-center text-lg-end overflow-hidden">
          <img class="img-fluid border-hero" :src="img" alt="hero" />
        </div>
        <div class="col-lg-6 text-center text-lg-start">
          <h1 class="display-3 text-white font-freshly">
            {{ titulo }}
          </h1>
          <p class="text-white mb-4 pb-2" v-if="texto && texto.length">
            {{ texto }}
          </p>
          <router-link
            v-if="informacionBoton && Object.keys(informacionBoton).length"
            :to="informacionBoton.path"
            class="btn btn-primary py-sm-3 platos px-sm-5 me-3"
            >{{ informacionBoton.titulo }}
            <i :class="informacionBoton.claseIcono"></i>
          </router-link>
        </div>
      </div>
      <div class="row justify-content-center g-5" v-if="soloTexto">
        <div class="col-lg-6 text-center text-lg-start">
          <h1 class="display-3 text-white font-freshly text-center">
            {{ titulo }}
          </h1>
          <p
            class="text-white mb-4 pb-2 text-center fst-italic"
            v-if="texto && texto.length"
          >
            {{ texto }}
          </p>
          <div class="justify-content-center text-center">
            <template 
              v-if="informacionBoton && Object.keys(informacionBoton).length"
            >
              <a
              v-if="informacionBoton.href" 
              :href="informacionBoton.path"
              class="btn btn-primary py-sm-3 platos px-sm-5 me-3"
              >{{ informacionBoton.titulo }}
              <i :class="informacionBoton.claseIcono"></i>
            </a>
              <router-link
              v-else 
              :to="informacionBoton.path"
              class="btn btn-primary py-sm-3 platos px-sm-5 me-3"
              >{{ informacionBoton.titulo }}
              <i :class="informacionBoton.claseIcono"></i>
            </router-link>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    img: {
      type: String,
      required: false,
    },
    informacionBoton: {
      type: Object,
      required: false,
    },
    titulo: {
      type: String,
      required: true,
    },
    texto: {
      type: String,
      required: false,
    },
    soloTexto: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>


<style scoped>
.border-hero {
  border-radius: 5em;
  border-color: none;
}
.platos i::before {
  color: #fff !important;
}
.hero-header {
  background: linear-gradient(#2b180fe6, #0f1e2be6),
    url(@/assets/img/bg-hero.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
background-attachment: fixed;
}
</style>