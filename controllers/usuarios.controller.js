const { response, request } = require("express");

//pedir usuarios
const usuariosGet = (req = request, res = response) => {
  const { q, nombre, apikey } = req.query;

  res.json({
    msg: "get Api - Controlador",
    q,
    nombre,
    apikey,
  });
};

//crear usuarios
const usuariosPos = (req = request, res = response) => {
  const { nombre, edad } = req.body;

  res.json({
    msg: "post Api - Controlador",
    nombre,
    edad,
  });
};

//modificar usuarios todos los parametros
const usuariosPut = (req = request, res = response) => {
  const id = req.params.id;

  res.json({
    msg: "put Api - Controlador",
    id,
  });
};

//modificar usuarios, parametros unicos
const usuariosPatch = (req = request, res = response) => {
  res.json({
    msg: "patch Api - Controlador",
  });
};

//eliminar usuarios
const usuariosDelete = (req = request, res = response) => {
  res.json({
    msg: "delete Api - Controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPos,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
