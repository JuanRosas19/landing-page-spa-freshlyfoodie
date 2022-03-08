const { Router } = require('express');
const router = Router();
const { registrarContacto } = require('../controller/controller');

router.post('/registrar-cita', registrarContacto);

module.exports = router;
