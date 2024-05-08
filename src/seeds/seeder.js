import { exit } from "node:process";
import solicitudes from "./solicitudes.js";
import usuarios from "./usuarios.js";
import admin from "./admin.js";
import herramientas from "./herramientas.js";
import noticias from "./noticias.js";
import materias from "./materias.js";
import {
  Solicitud,
  Usuario,
  Admin,
  Herramienta,
  Materia,
  Noticia,
} from "../models/index.js";
import db from "../config/bd.js";

const importarDatos = async () => {
  try {
    // Autenticar
    await db.authenticate();

    // Generar columnas
    await db.sync();

    // Insertar datos
    await Promise.all([
      Solicitud.bulkCreate(solicitudes),
      Usuario.bulkCreate(usuarios),
      Admin.bulkCreate(admin),
      Herramienta.bulkCreate(herramientas),
      Materia.bulkCreate(materias),
      Noticia.bulkCreate(noticias),
    ]);
    console.log("importación correcta");
    exit();
  } catch (error) {
    console.log(error);
    exit(1);
  }
};
const eliminarDatos = async () => {
  try {
    await db.sync({ force: true });
    console.log("eliminacion de datos de forma correcta");
    exit();
  } catch (error) {
    console.log(error);
    exit(1);
  }
};

if (process.argv[2] === "-i") {
  importarDatos();
}
if (process.argv[2] === "-e") {
  eliminarDatos();
}
