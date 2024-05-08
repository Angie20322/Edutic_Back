import setResetPass from "../../controllers/passwords.controllers.js/setResetPass.controllers.js";

const resetPass = async (req, res) => {
  const { enlace } = req.params;
  const { password } = req.body;
  try {
    const passReset = await setResetPass(enlace, password);
    res.status(200).json(passReset);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default resetPass;
