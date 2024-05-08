import getChangePassword from "../../controllers/passwords.controllers.js/getChangePassword.controllers.js";

const changePassword = async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  console.log(id, password);

  try {
    const cambiarPass = await getChangePassword(id, password);
    res.status(200).json(cambiarPass);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default changePassword;
