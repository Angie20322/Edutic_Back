import setNuevaMateria from "../../controllers/materias.controllers/setNuevaMateria.controllers.js";

const newMateria = async (req, res) => {
  try {
    const crearMateria = await setNuevaMateria(req.body);
    try {
      res.status(200).json(crearMateria);
    } catch (error) {
      res.status(400).json(error.message);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default newMateria;
