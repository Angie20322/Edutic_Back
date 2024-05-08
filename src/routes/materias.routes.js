import express from "express";

import allMaterias from "../handlers/materias.handlers/allMaterias.handlers.js";
import materiasById from "../handlers/materias.handlers/materiasById.handlers.js";
import newMateria from "../handlers/materias.handlers/newMateria.handlers.js";
import editarMateria from "../handlers/materias.handlers/editarMaterias.handlers.js";
import auth from "../middleware/auth.js";
import eliminarMateria from "../handlers/materias.handlers/eliminarMateria.handlers.js";

const router = express.Router();

router.get("/", auth, allMaterias);
router.get("/detail/:id", auth, materiasById);
router.post("/nueva", auth, newMateria);
router.put("/editar", auth, editarMateria);
router.delete("/eliminar/:id", auth, eliminarMateria);

export default router;
