import setNuevaHerramienta from "../../controllers/herramientas.controllers/setNuevaHerramienta.controllers.js";

const newHerramienta = async (req, res) => {
  try {
    const crearHerramienta = await setNuevaHerramienta(req.body);
    try {
      res.status(200).json(crearHerramienta);
    } catch (error) {
      res.status(400).json(error.message);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default newHerramienta
