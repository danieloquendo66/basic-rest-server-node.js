const { Router } = require("express");
const {
  usuariosGet,
  usuariosPos,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
} = require("../controllers/usuarios.controller");

const router = Router();

router.get("/", usuariosGet);

router.post("/", usuariosPos);
router.put("/:id", usuariosPut);
router.patch("/", usuariosPatch);

router.delete("/", usuariosDelete);

module.exports = router;
