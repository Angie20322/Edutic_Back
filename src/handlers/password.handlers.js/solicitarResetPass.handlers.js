import setSolicitarResetPass from "../../controllers/passwords.controllers.js/setSolicitarResetPass.controllers.js";

const solicitarResetPass = async (req, res) => {
  const { email } = req.body;
  try {
    const usuario = await setSolicitarResetPass(email);
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default solicitarResetPass;
