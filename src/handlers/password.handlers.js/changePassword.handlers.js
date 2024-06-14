import getChangePassword from "../../controllers/passwords.controllers.js/getChangePassword.controllers.js";

const changePassword = async (req, res) => {
  const { id } = req.params;

  try {
    const cambiarPass = await getChangePassword(id, req.body);
    res.status(200).json(cambiarPass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default changePassword;
