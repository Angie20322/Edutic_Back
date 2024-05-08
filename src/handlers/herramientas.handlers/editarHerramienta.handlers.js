import updateHerramienta from "../../controllers/herramientas.controllers/updateHerramienta.controllers.js";

const editarHerramienta = async (req, res) => {
    const editHerramienta = req.body;
    try {
      const herramientaEdit = await updateHerramienta(editHerramienta);
      res.status(200).json(herramientaEdit);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  export default editarHerramienta;