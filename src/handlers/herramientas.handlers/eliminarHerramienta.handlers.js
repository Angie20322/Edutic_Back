import getDeleteHerramienta from "../../controllers/herramientas.controllers/getDeleteHerramienta.controllers.js";

const eliminarHerramienta = async (req, res) => {
  const { id } = req.params;
  try {
    const herramientaDelete = await getDeleteHerramienta(id);
    res.status(200).json(herramientaDelete);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default eliminarHerramienta;
