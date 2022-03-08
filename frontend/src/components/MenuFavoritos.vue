<template>
  <section
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1500"
    class="container-xxl py-5"
  >
    <div class="container">
      <div class="text-center">
        <h5
          class="titulo-freshly font-freshly text-center text-color fw-normal"
        >
          {{ titulo }}
        </h5>
        <h1 class="mb-5 font-freshly">{{ subtitulo }}</h1>
      </div>
      <div class="tab-class text-center">
        <ul
          class="
            nav nav-pills
            d-inline-flex
            justify-content-center
            border-bottom
            mb-5
          "
          v-if="enlacesFavoritos && enlacesFavoritos.length"
        >
          <template v-for="(item, index) in enlacesFavoritos" :key="index">
            <li @click="buscarPor(item)" class="nav-item">
              <a
                :class="[
                  'd-flex align-items-center text-start mx-3 ms-0 pb-3',
                  item.active ? 'active' : '',
                ]"
                data-bs-toggle="pill"
                :href="`favorito-${index + 1}`"
              >
                <i :class="item.claseIcono"></i>
                <div class="ps-3">
                  <h6 class="mt-n1 mb-0">{{ item.plato }}</h6>
                </div>
              </a>
            </li>
          </template>
        </ul>

        <div class="tab-content">
          <template v-for="(favorito, index) in favoritos" :key="index">
            <div
              :id="`favorito-${index + 1}`"
              :class="[
                'tab-pane fade show p-0',
                favorito.active ? 'active' : '',
              ]"
            >
              <div class="row justify-content-center g-4">
                <div :class="['col-lg-6', index + 1 !== 1 ? 'mt-5' : '']">
                  <div class="d-flex align-items-center">
                    <img
                      class="flex-shrink-0 img-fluid rounded"
                      :src="favorito.src"
                      :alt="`favorito-${index + 1}`"
                      style="width: 80px"
                    />
                    <div class="w-100 d-flex flex-column text-start ps-4">
                      <h5
                        class="
                          d-flex
                          justify-content-between
                          border-bottom
                          pb-2
                        "
                      >
                        <span>{{ favorito.plato }} </span>
                        <span class="text-color">${{ favorito.precio }}</span>
                      </h5>
                      <small class="fst-italic"
                        >{{ favorito.descripcion }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
export default {
  name: "MenuFavoritos",
  props: {
    titulo: {
      type: String,
      required: true,
    },
    subtitulo: {
      type: String,
      required: true,
    },
    enlacesFavoritos: {
      type: Array,
      required: true,
    },
    favoritos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    buscarPor(item) {
      this.favoritos.forEach((favorito) => {
        if (favorito.tipo === item.tipo) {
          favorito.active = true;
        } else {
          favorito.active = false;
        }
      });
    },
  },
  mounted() {
    AOS.init({
      duration: 1000,
    });
  },
};
</script>

<style>
.text-color {
  color: var(--naranja-freshly);
}
</style>
<style scoped>
a {
  text-decoration: none;
}
h6 {
  color: #000;
}
.nav-pills .nav-item .active {
  border-bottom: 2px solid var(--naranja-freshly);
}
.icono-menu:hover::before {
  color: var(--naranja-freshly) !important;
}
</style>