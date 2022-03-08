const mysqlAwait = require('../config/database');

const registrarContacto = async (req, res) => {
  const { nombre, email, mensaje, fecha, comensales } = req.body;
  //Valida que los campos no esten vacios y existan
  if (
    nombre.trim() === '' ||
    email.trim() === '' ||
    mensaje.trim() === '' ||
    !comensales ||
    !fecha
  ) {
    return res.status(400).json({
      msg: 'Todos los campos son obligatorios',
    });
  }
  const query = `INSERT INTO citas (nombre, email, comensales, fecha,mensaje ) VALUES ('${nombre}', '${email}', '${comensales}', '${fecha}', '${mensaje}')`;
  try {
    const response = await mysqlAwait.awaitQuery(query, req.body);
    if(response.affectedRows === 1){
      res.status(200).json({
        msg: 'Cita registrada con éxito, nos comunicaremos con usted lo más pronto posible',
      });
    }
  } catch (error) {
    return res.status(500).json({
      msg: 'Error al registrar el contacto',
    });
  }
};
module.exports = {
  registrarContacto,
};
