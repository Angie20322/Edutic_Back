import { Materia, Herramienta } from "../../models/index.js";

const updateMateria = async (update) => {
  try {
    const materias = await Materia.findByPk(update.id);

    if (!materias) {
      throw new Error("Herramienta no encontrada");
    }
    await materias.update(update);
    if (update.herramientas) {
      // Buscar las herramientas por sus nombres
      const herramientasDB = await Herramienta.findAll({
        where: { nombre: update.herramientas },
      });

      // Limpiar las asociaciones existentes
      await materias.setHerramientas([]);

      // Asociar las nuevas herramientas
      await materias.addHerramienta(herramientasDB);
    }

    return materias;
  } catch (error) {
    return { error: error.message };
  }
};

export default updateMateria;
