import express from "express";

import allHerramientas from "../handlers/herramientas.handlers/allHerramientas.handlers.js";
import newHerramienta from "../handlers/herramientas.handlers/newHerramienta.handlers.js";
import herramientaById from "../handlers/herramientas.handlers/herramientaById.handlers.js";
import editarHerramienta from "../handlers/herramientas.handlers/editarHerramienta.handlers.js";
import auth from "../middleware/auth.js";
import eliminarHerramienta from "../handlers/herramientas.handlers/eliminarHerramienta.handlers.js";

const router = express.Router();

router.get("/", auth, allHerramientas);
router.get("/detail/:id", auth, herramientaById);
router.post("/nueva", auth, newHerramienta);
router.put("/editar", auth, editarHerramienta);
router.delete("/eliminar/:id", auth, eliminarHerramienta);

export default router;
