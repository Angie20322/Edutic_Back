import express from "express";

import auth from "../middleware/auth.js";
import newAdmin from "../handlers/admin.handlers/newAdmin.handlers.js";
import allAdmin from "../handlers/admin.handlers/allAdmin.handlers.js";
import adminById from "../handlers/admin.handlers/adminById.handlers.js";
import editarAdmin from "../handlers/admin.handlers/editarAdmin.handlers.js";
import eliminarAdmin from "../handlers/admin.handlers/eliminarAdmin.handlers.js";

const router = express.Router();

router.post("/nuevo", auth, newAdmin);
router.get("/", auth, allAdmin);
router.get("/detail/:id", auth, adminById);
router.put("/editar/:id", auth, editarAdmin);
router.delete("/eliminar/:id", auth, eliminarAdmin);

export default router;
