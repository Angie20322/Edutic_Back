import setEditarAdmin from "../../controllers/admin.controllers/setEditarAdmin.controllers.js";

const editarAdmin = async (req, res) => {
  const editarAdmin = req.body;
  const { id } = req.params;
  try {
    const adminEdit = await setEditarAdmin(editarAdmin, id);
    res.status(200).json(adminEdit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default editarAdmin;
