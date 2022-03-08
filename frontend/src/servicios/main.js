import { URL } from '../constantes/main';

const enviarCita = (datosCita) => {
  return fetch(`${URL}/registrar-cita`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(datosCita),
  });
};
export { enviarCita };
