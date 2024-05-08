import { Herramienta } from "../../models/index.js";

const getAllHerramientas = async () => {
  const herramientas = await Herramienta.findAll();
  return herramientas;
};

export default getAllHerramientas;
