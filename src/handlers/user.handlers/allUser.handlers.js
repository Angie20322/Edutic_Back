import getAllUsers from "../../controllers/user.controllers/getAllUsers.controllers.js";

const allUser = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default allUser;
