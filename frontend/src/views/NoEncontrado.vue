<template>
  <div class="no-encontrado">
    <div class="no-encontrado-contenedor">
      <div class="no-encontrado-contenedor-404">
        <h1 class="font-freshly">404</h1>
      </div>
      <h2 class="font-freshly">¡La pagina que intenta acceder no existe!</h2>
      <router-link to="/contacto"
        ><i class="fa-solid fa-arrow-left"></i> Volver</router-link
      >
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "NoEncontrado",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.no-encontrado {
  position: relative;
  height: 50em;
  background: #f7cb89;
}

.no-encontrado .no-encontrado-contenedor {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.no-encontrado-contenedor {
  max-width: 710px;
  width: 100%;
  text-align: center;
  padding: 0px 15px;
  line-height: 1.4;
}

.no-encontrado-contenedor .no-encontrado-contenedor-404 {
  height: 200px;
  line-height: 200px;
}

.no-encontrado-contenedor .no-encontrado-contenedor-404 h1 {
  font-size: 168px;
  margin: 0px;
  color: var(--oscuro-freshly);
  text-transform: uppercase;
}

.no-encontrado-contenedor a {
  display: inline-block;
  font-weight: 700;
  border-radius: 15px;
  text-decoration: none;
  color: var(--oscura-freshly);
}
h2 {
  font-size: 1.5em;
  font-weight: 700;
  color: var(--naranja-freshly);
}

@media only screen and (max-width: 767px) {
  .no-encontrado-contenedor .no-encontrado-contenedor-404 {
    height: 122px;
    line-height: 122px;
  }
  .no-encontrado-contenedor .no-encontrado-contenedor-404 h1 {
    font-size: 122px;
  }
}
</style>