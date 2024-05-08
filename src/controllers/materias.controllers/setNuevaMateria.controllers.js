import { Materia, Herramienta } from "../../models/index.js";

const setNuevaMateria = async (data) => {
  const { nombre, imagen, descripcion, herramientas, adminId } =
    data;

  const materias = await Materia.create({
    nombre,
    imagen,
    descripcion,
    adminId
  });

  let herramientasDB = await Herramienta.findAll({
    where: { nombre: herramientas },
  });

  await materias.addHerramienta(herramientasDB);

  return materias;
};

export default setNuevaMateria;
