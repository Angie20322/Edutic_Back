import { Herramienta, Materia, Admin } from "../../models/index.js";

const getMateriaById = async (id) => {
  try {
    const materias = await Materia.findOne({
      where: { id: id },
      include: [
        {
          model: Herramienta,
          attributes: ["id", "nombre"],
          through: {
            attributes: [],
          },
        },
        {
          model: Admin,
          as: "admin",
        },
      ],
    });
    return materias;
  } catch (error) {
    return error.message;
  }
};

export default getMateriaById;
