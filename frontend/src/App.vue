<template>
  <div>
    <div>
      <Navbar />
      <router-view v-slot="{ Component, route }">
  <transition name="fade">
    <component :is="Component" :key="route.path" />
  </transition>
</router-view>
      <BotonTop />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import BotonTop from "./components/BotonTop.vue";
export default {
  components: {
    Navbar,
    Footer,
    BotonTop,
  },
};
</script>
<style >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter,
.fade-leave-to  {
  opacity: 0;
}

:root {
  --naranja-freshly: #fea116;
  --blanco-claro: #f1f8ff;
  --oscuro-freshly: rgb(2, 28, 49);
}

.font-freshly {
  font-family: 'Satisfy', cursive;
}

.border-primary{
  color:#021c31 !important;
}
.boton-volver {
  position: fixed;
  display: none;
  right: 45px;
  bottom: 45px;
  z-index: 99;
}

.btn {
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.5s;
}

.btn.btn-primary,
.btn.btn-secondary {
  color: #ffffff;
  background-color: var(--naranja-freshly);
  border: 1px solid var(--naranja-freshly);
  border-radius: 2em;
}
i::before{
  color: var(--naranja-freshly) !important;
}
i:hover::before{
  color: #fff !important;
}

.btn:hover{
  background:#ffb23f !important;
  border-color: #fea116;
  border:3px solid #fea116;
}
.btn-square {
  width: 38px;
  height: 38px;
}

.btn-sm-square {
  width: 32px;
  height: 32px;
}

.btn-lg-square {
  width: 48px;
  height: 48px;
}

.btn-square,
.btn-sm-square,
.btn-lg-square {
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  border-radius: 2px;
}


.titulo-freshly {
  position: relative;
  display: inline-block;
}

.titulo-freshly::before {
  position: absolute;
  content: '';
  width: 45px;
  height: 2px;
  top: 50%;
  left: -55px;
  margin-top: -1px;
  background: var(--naranja-freshly);
}

.titulo-freshly::after {
  position: absolute;
  content: '';
  width: 45px;
  height: 2px;
  top: 50%;
  right: -55px;
  margin-top: -1px;
  background: var(--naranja-freshly);
}


.titulo-freshly.text-start::before,
.titulo-freshly.text-end::after {
  display: none;
}
</style>
