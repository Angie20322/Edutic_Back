import express from "express";
import allNoticia from "../handlers/noticia.handlers/allNoticias.handlers.js";
import noticiaById from "../handlers/noticia.handlers/noticiaById.handlers.js";
import newNoticia from "../handlers/noticia.handlers/newNoticia.handlers.js";
import editarNoticia from "../handlers/noticia.handlers/editarNoticia.handlers.js";
import auth from "../middleware/auth.js";
import eliminarNoticia from "../handlers/noticia.handlers/eliminarNoticia.handlers.js";

const router = express.Router();

router.get("/", auth, allNoticia);
router.get("/detail/:id", auth, noticiaById);
router.post("/nueva", auth, newNoticia);
router.put("/editar", auth, editarNoticia);
router.delete("/eliminar/:id", auth, eliminarNoticia);

export default router;
