import getAllHerramientas from "../../controllers/herramientas.controllers/getAllHerramientas.controllers.js";

const allHerramientas = async (req, res) => {
  try {
    const herramientas = await getAllHerramientas();
    res.status(200).json(herramientas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default allHerramientas;
