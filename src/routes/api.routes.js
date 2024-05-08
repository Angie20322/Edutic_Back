import express from "express";
import {
  departamentos,
  ciudades,
} from "../handlers/api.handlers/api.handler.js";

const router = express.Router();

router.get("/", departamentos);
router.get("/city/:state", ciudades);

export default router;
