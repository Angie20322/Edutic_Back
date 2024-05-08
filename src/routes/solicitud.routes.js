import express from "express";

import newSolicitudHandler from "../handlers/solicitud.handlers/newSolicitud.handlers.js";
import allSolitudesHandler from "../handlers/solicitud.handlers/allSolicitud.handler.js";
import solicitudById from "../handlers/solicitud.handlers/solicitudById.handlers.js";
import deleteSolicitud from "../handlers/solicitud.handlers/deleteSolicitud.handlers.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, allSolitudesHandler);
router.post("/", newSolicitudHandler);
router.get("/:id", auth, solicitudById);
router.delete("/:id", auth, deleteSolicitud);

export default router;
