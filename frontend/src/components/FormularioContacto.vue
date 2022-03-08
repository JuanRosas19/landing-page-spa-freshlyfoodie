<template>
  <section class="container-xxl py-5 animate__animated animate__flipInX">
    <div class="container">
      <div class="text-center">
        <h5 class="titulo-freshly font-freshly text-center text-color">
          {{ titulo }}
        </h5>
        <h1 class="mb-5 font-freshly">{{ subtitulo }}</h1>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-12">
          <div class="row gy-4">
            <div class="col-md-6">
              <h5 class="titulo-freshly font-freshly text-start text-color">
                Teléfono
              </h5>
              <p class="text-muted fst-italic">
                <i class="fa fa-phone text-color me-2"></i>+58 (424)-867-5309
              </p>
            </div>
            <div class="col-md-6">
              <h5 class="titulo-freshly font-freshly text-start text-color">
                Correo Electrónico
              </h5>
              <p class="text-muted fst-italic">
                <i class="fa fa-envelope text-color me-2"></i>
                contacto@freshly_restaurante.com
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <form @submit.prevent="enviarFormulario">
              <div class="row g-3">
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      v-model.trim="cita.nombre"
                      type="text"
                      class="form-control"
                      id="nombre"
                    />
                    <label for="nombre">Nombre completo</label>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-floating">
                    <input
                      v-model.trim="cita.email"
                      type="email"
                      class="form-control"
                      id="email"
                    />
                    <label for="email">Ingresa el email </label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-floating">
                    <select
                      v-model.trim="cita.comensales"
                      class="form-control"
                      id="comensal"
                    >
                      <option selected disabled value="">
                        Seleccionar N° de personas
                      </option>
                      <option
                        v-for="comensal in comensales"
                        :key="comensal.value"
                        :value="comensal.value"
                      >
                        {{ comensal.nombre }}
                      </option>
                    </select>
                    <label for="comensal">N° de comensales</label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="form-floating">
                    <input
                      v-model="cita.fecha"
                      type="date"
                      class="form-control"
                      id="fecha"
                      :min="fechaMinima"
                    />
                    <label for="fecha">Fecha de la cita</label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-floating">
                    <textarea
                      v-model.trim="cita.mensaje"
                      class="form-control"
                      id="mensaje"
                      style="height: 150px"
                    ></textarea>
                    <label for="mensaje"
                      >Indicanos que platos te gustaria comer...</label
                    >
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary w-100 py-3" type="submit">
                    Enviar cita <i class="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6">
          <iframe
            class="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15779.583833867848!2d-70.25272630000002!3d8.605987100000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1646605454337!5m2!1ses!2sve"
            frameborder="0"
            style="min-height: 350px; border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { enviarCita } from "../servicios/main";
import Swal from "sweetalert2";
export default {
  name: "FormularioContacto",
  data() {
    return {
      fechaMinima: new Date().toISOString().split("T")[0],
      cita: {
        nombre: "",
        email: "",
        comensales: "",
        fecha: "",
        mensaje: "",
      },
      comensales: [
        {
          nombre: "1 persona",
          value: 1,
        },
        {
          nombre: "2 personas",
          value: 2,
        },
        {
          nombre: "3 personas",
          value: 3,
        },
        {
          nombre: "Más de 4 personas",
          value: 4,
        },
      ],
    };
  },
  methods: {
    mostrarAlertaMensaje(contenido, tipo) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: tipo,
        title: contenido,
      });
    },
    validarEmail(email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async enviarFormulario() {
      if (
        this.cita.nombre == "" ||
        this.cita.email == "" ||
        !this.cita.comensales ||
        this.cita.fecha == "" ||
        this.cita.mensaje == ""
      ) {
        this.mostrarAlertaMensaje("Todos los campos son obligatorios", "error");
        return;
      }
      //Validar email
      if (!this.validarEmail(this.cita.email)) {
        this.mostrarAlertaMensaje("El email ingresado no es valido", "error");
        return;
      }
      //Validar fecha
      if (this.cita.fecha < this.fechaMinima) {
        this.mostrarAlertaMensaje("La fecha ingresada no es valida", "error");
        return;
      }
      //Enviar formulario
      try {
        const response = await enviarCita(this.cita);
        const respuesta = await response.json();
        if (respuesta.msg.includes("registrada")) {
          this.mostrarAlertaMensaje(respuesta.msg, "success");
          this.cita = {
            nombre: "",
            email: "",
            comensales: "",
            fecha: "",
            mensaje: "",
          };
        }
      } catch (error) {
        this.mostrarAlertaMensaje("Error al enviar el formulario", "error");
      }
    },
  },
  props: {
    titulo: {
      type: String,
      required: true,
    },
    subtitulo: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
i::before {
  font-size: 1.5rem;
  color: #fff !important;
}
</style>