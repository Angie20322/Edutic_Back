import getEliminarAdmin from "../../controllers/admin.controllers/getEliminarAdmin.controllers.js";

const eliminarAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getEliminarAdmin(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default eliminarAdmin;
