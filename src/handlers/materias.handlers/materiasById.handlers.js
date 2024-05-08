import getMateriaById from "../../controllers/materias.controllers/getMateriaById.js";

const materiasById = async (req, res) => {
  try {
    const { id } = req.params;
    const materias = await getMateriaById(id);
    return materias
      ? res.status(200).json(materias)
      : res.status(400).json({ error: "No se encontró ID" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default materiasById;
