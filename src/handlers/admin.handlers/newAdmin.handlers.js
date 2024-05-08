import setNewAdmin from "../../controllers/admin.controllers/setNewAdmin.controllers.js";

const newAdmin = async (req, res) => {
  try {
    const createAdmin = await setNewAdmin(req.body);
    try {
      res.status(200).json(createAdmin);
    } catch (error) {
      res.status(400).json(error.message);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default newAdmin;
