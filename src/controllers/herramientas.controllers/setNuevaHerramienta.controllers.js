import { Herramienta, Materia } from "../../models/index.js";

const setNuevaHerramienta = async (data) => {
  const {
    nombre,
    imagen,
    descripcion,
    manual,
    video,
    materias,
    publicado,
    usuarioId,
    adminId,
  } = data;

  const herramienta = await Herramienta.create({
    nombre,
    imagen,
    descripcion,
    manual,
    video,
    publicado,
    usuarioId,
    adminId,
  });

  let materiasDB = await Materia.findAll({
    where: { nombre: materias },
  });

  await herramienta.addMateria(materiasDB);
  return herramienta;
};

export default setNuevaHerramienta;
