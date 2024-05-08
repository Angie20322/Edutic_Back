import getAdminById from "../../controllers/admin.controllers/getAdminById.controllers.js";

const adminById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await getAdminById(id);
    return admin
      ? res.status(200).json(admin)
      : res.status(400).json({ error: "No se encontró ID" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default adminById;
