import getAllAdmin from "../../controllers/admin.controllers/getAllAdmin.controllers.js";

const allAdmin = async (req, res) => {
  try {
    const admins = await getAllAdmin();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default allAdmin;
