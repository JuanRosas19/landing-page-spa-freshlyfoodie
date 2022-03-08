<template>
  <section data-aos="flip-up" class="ofertas">
    <div class="container">
      <div>
        <h2 class="font-freshly text-center">
          {{ titulo }} <span class="decorado">{{ tituloDestacado }}</span>
        </h2>
        <p class="text-center text-muted">
          {{ descripcion }}
        </p>
      </div>

      <div class="row">
        <div class="col-lg-3">
          <ul class="nav nav-tabs flex-column" v-if="enlaces && enlaces.length">
            <template
              v-for="(enlace, index) in enlaces"
              :key="enlace.titulo + index"
            >
              <li @click="activarTabOferta(enlace)" class="nav-item">
                <a
                  :class="['nav-link', enlace.active ? 'active show' : '']"
                  data-bs-toggle="tab"
                  :href="`enlace-${index + 1}`"
                  >{{ enlace.titulo }}</a
                >
              </li>
            </template>
          </ul>
        </div>
        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="tab-content" v-if="ofertas && ofertas.length">
            <template
              v-for="(oferta, index) in ofertas"
              :key="oferta.titulo + index"
            >
              <div
                :class="['tab-pane', oferta.active ? 'active show' : '']"
                :id="`enlace-${index + 1}`"
              >
                <div class="row">
                  <div class="col-lg-8 detalles-oferta order-2 order-lg-1">
                    <h3>{{ oferta.titulo }}</h3>
                    <p class="fst-italic">
                      {{ oferta.subtitulo }}
                    </p>
                    <p>
                      {{ oferta.descripcion }}
                    </p>
                  </div>
                  <div class="col-lg-4 text-center order-1 order-lg-2">
                    <img
                      :src="oferta.src"
                      :alt="`Oferta-${index + 1}`"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AOS from "aos";
export default {
  name: "Ofertas",
  methods: {
    activarTabOferta(enlace) {
      this.ofertas.forEach((oferta) => {
        if (oferta.titulo === enlace.titulo) {
          oferta.active = true;
        } else {
          oferta.active = false;
        }
      });
    },
  },
  props: {
    titulo: {
      type: String,
      required: true,
    },
    tituloDestacado: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    enlaces: {
      type: Array,
      required: true,
    },
    ofertas: {
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
.ofertas {
  overflow: hidden;
}
.ofertas .nav-tabs {
  border: 0;
}
.ofertas .nav-link {
  border: 0;
  padding: 12px 15px 12px 0;
  transition: 0.3s;
  color: #433f39;
  border-radius: 0;
  border-right: 2px solid #e8e7e4;
  font-weight: 600;
  font-size: 15px;
}
.ofertas .nav-link:hover {
  color: #ffb03b;
}
.ofertas .nav-link.active {
  color: #ffb03b;
  border-color: #ffb03b;
}
.ofertas .tab-pane.active {
  -webkit-animation: fadeIn 0.5s ease-out;
  animation: fadeIn 0.5s ease-out;
}
.ofertas .detalles-oferta h3 {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #433f39;
}
.ofertas .detalles-oferta p {
  color: #777777;
}
.ofertas .detalles-oferta p:last-child {
  margin-bottom: 0;
}
@media (max-width: 992px) {
  .ofertas .nav-link {
    border: 0;
    padding: 15px;
  }
  .ofertas .nav-link.active {
    color: #fff;
    background: #ffb03b;
  }
}
</style>