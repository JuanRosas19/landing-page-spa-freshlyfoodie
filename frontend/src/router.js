import { createRouter, createWebHashHistory } from 'vue-router';
import Main from './views/Main.vue';
import Nosotros from './views/Nosotros.vue';
import Platos from './views/Platos.vue';
import Contacto from './views/Contacto.vue';
import NoEncontrado from './views/NoEncontrado.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/nosotros',
      component: Nosotros,
    },
    {
      path: '/platos',
      component: Platos,
    },
    {
      path:"/contacto",
      component:Contacto
    },
    { path: '/:pathMatch(.*)*', component: NoEncontrado },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});
