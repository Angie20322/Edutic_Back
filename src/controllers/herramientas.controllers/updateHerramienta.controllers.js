import { Herramienta, Materia } from "../../models/index.js";

const updateHerramienta = async (update) => {
  console.log(update)
  try {
    const herramientas = await Herramienta.findByPk(update.id);

    if (!herramientas) {
      throw new Error("Herramienta no encontrada");
    }
    await herramientas.update(update);
    if (update.materias) {
      const materiasDB = await Materia.findAll({
        where: { nombre: update.materias },
      });
      await herramientas.setMaterias([]);
      await herramientas.addMateria(materiasDB);
    }
    return herramientas;
  } catch (error) {
    return { error: error.message };
  }
};

export default updateHerramienta;
