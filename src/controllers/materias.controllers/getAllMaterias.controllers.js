import { Materia } from "../../models/index.js";

const getAllMaterias = async () => {
  const materias = await Materia.findAll();
  return materias;
};

export default getAllMaterias;