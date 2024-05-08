import getHerramientaById from "../../controllers/herramientas.controllers/getHerramientaById.controllers.js";

const herramientaById = async (req, res) => {
  try {
    const { id } = req.params;
    const herramientas = await getHerramientaById(id);
    return herramientas
      ? res.status(200).json(herramientas)
      : res.status(400).json({ error: "No se encontró ID" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export default herramientaById;
