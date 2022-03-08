<template>
  <div  class="container-fluid bg-dark text-light footer pt-5 mt-5">
    <div class="container">
      <div class="footer-contenedor">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; {{new Date().getFullYear()}}  Freshly Foodie - Tu mejor opción en restaurante
          </div>
          <div class="col-md-6 text-center text-md-end">
            <div class="footer-menu" v-if="enlaces && enlaces.length">
              <template v-for="enlace in enlaces" :key="enlace.path">
                <a
                  @click="$router.push(enlace.path)"
                  :to="`${enlace.path}`"
                  class="pointer"
                >
                  <i :class="enlace.claseIcono"></i>
                  {{ enlace.nombre }}</a
                >
              </template>
                        <router-link to="/contacto" class="pointer "
            ><i class="fa-solid fa-paper-plane"></i>  Contáctar</router-link
          >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { enlaces } from "../constantes/main";
export default {
  name: "Footer",
  data() {
    return {
      enlaces,
    };
  },
};
</script>

<style scoped>
.footer .footer-contenedor {
  padding: 25px 0;
  font-size: 15px;
  border-top: 1px solid rgba(256, 256, 256, 0.1);
}

.footer .footer-contenedor a {
  color: var(--blanco-claro);
  text-decoration: none;
}

.footer .footer-menu a {
  margin-right: 15px;
  padding-right: 15px;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.footer .footer-menu a:last-child {
  margin-right: 0;
  padding-right: 0;
  border-right: none;
}

</style>