import setNewUser from "../../controllers/user.controllers/setNewUser.controllers.js";

const newUser = async (req, res) => {
  console.log(req.body);
  try {
    const createUser = await setNewUser(req.body);
    try {
      res.status(200).json(createUser);
    } catch (error) {
      res.status(400).json(error.message);
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default newUser;
