<template>
  <button
    @click="scrollToTop"
    :class="[
      'btn',
      'btn-primary',
      'btn-lg-square',
      'boton-volver',
      { fade: !mostrarBotonTop },
    ]"
  >
    <i class="fa-solid fa-circle-up"></i>
  </button>
</template>

<script>
export default {
  name: "BotonTop",
  data() {
    return {
      mostrarBotonTop: false,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    listenerBoton() {
      if (window.scrollY > 0) {
        this.mostrarBotonTop = true;
      } else {
        this.mostrarBotonTop = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.listenerBoton);
  },
};
</script>

<style scoped>
.boton-volver i::before {
  color: #fff !important;
}
.fade {
  opacity: 0;
  transition: opacity 1s ease-out;
}
.active {
  opacity: 1;
}
</style>