import getCiudad from "../../controllers/api.controllers/getCiudad.controllers.js";
import getDepartamento from "../../controllers/api.controllers/getDepartamento.controllers.js";

const departamentos = async (req, res) => {
  try {
    const departamento = await getDepartamento();
    res.status(200).json(departamento);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const ciudades = async (req, res) => {
  const { state } = req.params;
  try {
    const ciudad = await getCiudad(state);
    res.status(200).json(ciudad);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { departamentos, ciudades };
