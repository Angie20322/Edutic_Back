import { Herramienta } from "../../models/index.js";

const getDeleteHerramienta = async (id) => {
  const deleteHerramienta = await Herramienta.findByPk(id);
  if (!deleteHerramienta) {
    throw new Error("No existe la herramienta", id);
  }
  const materiasAsociadas = await deleteHerramienta.getMaterias();

  await deleteHerramienta.removeMateria(materiasAsociadas);

  await deleteHerramienta.destroy();
  return "Se ha eliminado la herramienta";
};

export default getDeleteHerramienta;
