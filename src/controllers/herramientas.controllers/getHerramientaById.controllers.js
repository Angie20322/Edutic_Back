import { Herramienta, Materia, Admin, Usuario } from "../../models/index.js";

const getHerramientaById = (id) => {
  try {
    const herramientas = Herramienta.findOne({
      where: { id: id },
      include: [
        {
          model: Materia,
          attributes: ["id", "nombre"],
          through: {
            attributes: [],
          },
        },
        {
          model: Usuario,
          as: "usuario",
        },
        {
          model: Admin,
          as: "admin",
        },
      ],
    });
    return herramientas;
  } catch (error) {
    return error.message;
  }
};

export default getHerramientaById;
