import setLoginUsuario from "../../controllers/user.controllers/setLoginUsuario.controllers.js";

const loginUsuario = async (req, res) => {
  try {
    const loginUser = await setLoginUsuario(req.body);
    res.status(200).json(loginUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default loginUsuario;
