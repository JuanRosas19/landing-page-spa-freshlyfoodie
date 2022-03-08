<template>
  <template v-if="tipo===1">
    <section class="servicios"  data-aos="zoom-in">
    <div class="container">
      <div>
        <h2 class="font-freshly text-center">
          {{ titulo }}
          <span v-if="tituloDestacado && tituloDestacado.length">{{
            tituloDestacado
          }}</span>
        </h2>
        <p v-if="texto && texto.length" class="text-center text-muted fst-italic">
          {{ texto }}
        </p>
      </div>
      <div class="row" v-if="servicios && servicios.length">
        <template
          v-for="(servicio, index) in servicios"
          :key="servicio.titulo + index"
        >
          <div class="col-lg-4 my-4 mt-lg-0">
            <div class="card">
              <span>0{{ index+1 }}</span> 
              <h4 class="font-freshly">{{ servicio.titulo }}</h4>
              <p>
                {{ servicio.texto }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
  </template>
  <template v-if="tipo===2">
    <section data-aos="flip-left" class="container-xxl py-5">
      <div class="container">
         <h2 class="font-freshly mb-5 escogernos text-center">
         {{titulo}}
          <span>{{tituloDestacado}}</span>
        </h2>
        <div class="row g-4" v-if="razones && razones.length">
          <template v-for="(razon, index) in razones" :key="razon.titulo+index">
              <div class="col-md-4 col-sm-6">
            <div class="razones-items rounded pt-3">
              <div class="p-4 text-center">
                <i :class="razon.claseIcono"></i>
                <h5 class="text-center">{{razon.titulo}} </h5>
                <p class="text-center text-muted">
                  {{razon.descripcion}}
                </p>
              </div>
            </div>
          </div>
          </template>
        </div>
      </div>
    </section>
  </template>
</template>

<script>
import AOS from 'aos'
export default {
  name: "ServiciosComponente",
  props: {
    tipo:{
      type:Number, 
      required:true
    },
    titulo: {
      type: String,
      default: "Nuestros Servicios",
    },
    tituloDestacado: {
      type: String,
      required: false,
      default: "Freshly Foodie",
    },
    texto: {
      type: String,
      required: false,
    },
    servicios: {
      type: Array,
      required: false,
      default:[]
    },
    razones:{
      type: Array,
      required: false,
      default:[]
    }
  },
  mounted() {
    AOS.init();
  },
};
</script>

<style>
.decorado {
  color: #fea116;
}
</style>
<style scoped>
.servicios .card {
  padding: 50px 30px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.3s;
  height: 100%;
}
.servicios span,.escogernos span {
  color: #fea116;
}

.servicios .card h4 {
  font-size: 24px;
  font-weight: 600;
  padding: 0;
  margin: 20px 0;
  color: #6c665c;
}
.servicios .card p {
  color: #aaaaaa;
  font-size: 15px;
  margin: 0;
  padding: 0;
}
.servicios .card:hover {
  background: #ffb03b;
  padding: 30px 30px 70px 30px;
  box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.18);
}
.servicios .card:hover span,
.servicios .card:hover h4,
.servicios .card:hover p {
  color: #fff;
}
.razones-items {
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
  transition: 0.5s;
}

.razones-items:hover {
  background: var(--naranja-freshly);
}

.razones-items * {
  transition: 0.5s;
}

.razones-items:hover * {
  color: var(--blanco-claro) !important;
}
.icono-razon::before:hover{
  color:#ffffff !important;
}

.razones-items:hover .icono-razon::before{
  color:#ffffff !important;
}


</style>