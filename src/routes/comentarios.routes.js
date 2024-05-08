import express from "express";

import auth from "../middleware/auth.js";
import nuevoComentario from "../handlers/comentarios.handlers/nuevoComentario.handlers.js";
import allComentarios from "../handlers/comentarios.handlers/allComentarios.handlers.js";
import deleteComentario from "../handlers/comentarios.handlers/deleteComentario.handlers.js";

const router = express.Router();

router.post("/nuevo", auth, nuevoComentario);
router.get("/all", auth, allComentarios);
router.delete("/eliminar/:id", auth, deleteComentario);

export default router;
