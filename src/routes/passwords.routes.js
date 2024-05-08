import express from "express";
import auth from "../middleware/auth.js";
import changePassword from "../handlers/password.handlers.js/changePassword.handlers.js";
import resetPass from "../handlers/password.handlers.js/resetPass.handlers.js";
import solicitarResetPass from "../handlers/password.handlers.js/solicitarResetPass.handlers.js";

const router = express.Router();

router.post("/cambiarpass/:id", auth, changePassword);
router.post("/resetpass", solicitarResetPass);
router.post("/olvidepass/:enlace", resetPass);

export default router;
