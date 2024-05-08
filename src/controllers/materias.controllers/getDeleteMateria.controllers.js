import { Materia } from "../../models/index.js";

const getDeleteMateria = async (id) => {
  const deleteMateria = await Materia.findByPk(id);
  if (!deleteMateria) {
    throw new Error("No existe la herramienta", id);
  }
  // Obtener las herramientas asociadas a la materia
  const herramientasAsociadas = await deleteMateria.getHerramientas();

  // Eliminar las asociaciones entre la materia y las herramientas
  await deleteMateria.removeHerramientas(herramientasAsociadas);

  await deleteMateria.destroy();
  return "Se ha eliminado la herramienta";
};

export default getDeleteMateria;
