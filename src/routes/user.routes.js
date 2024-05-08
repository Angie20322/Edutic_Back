import express from "express";

import allUser from "../handlers/user.handlers/allUser.handlers.js";
import newUser from "../handlers/user.handlers/newUser.handlers.js";
import confirmarUsuario from "../handlers/user.handlers/confirmarUsuario.handlers.js";
import comprobarEnlace from "../handlers/user.handlers/comprobarEnlace.handlers.js";
import usuarioById from "../handlers/user.handlers/usuarioById.handlers.js";
import editarUsuario from "../handlers/user.handlers/editarUsuario.handlers.js";
import loginUsuario from "../handlers/user.handlers/loginUsuario.handlers.js";
import auth from "../middleware/auth.js";
import eliminarUsuario from "../handlers/user.handlers/eliminarUsuario.handlers.js";
import solicitudCambio from "../handlers/user.handlers/solicitudCambio.handlers.js";

const router = express.Router();

router.get("/", auth, allUser);
router.post("/registrar", auth, newUser);
router.get("/user/:id", auth, usuarioById);
router.put("/editar/:id", auth, editarUsuario);
router.delete("/eliminar/:id", auth, eliminarUsuario);
router.post("/solicitudes/editar/:id", auth, solicitudCambio);

router.post("/login", loginUsuario);

router.get("/confirmar/:enlace", comprobarEnlace);
router.post("/confirmar/:enlace", confirmarUsuario);

export default router;

// Comentario