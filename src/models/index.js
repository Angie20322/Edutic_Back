import Solicitud from "./Solicitud.js";
import Usuario from "./Usuario.js";
import Comentario from "./Comentario.js";
import Herramienta from "./Herramienta.js";
import Materia from "./Materia.js";
import Noticia from "./Noticia.js";
import Admin from "./Admin.js";

Herramienta.belongsToMany(Comentario, {
  through: "herramienta_comentario",
  timestamps: false,
});
Materia.belongsToMany(Herramienta, {
  through: "materia_herramienta",
  timestamps: false,
});
Herramienta.belongsToMany(Materia, {
  through: "materia_herramienta",
  timestamps: false,
});
Noticia.belongsTo(Usuario);
Noticia.belongsTo(Admin);
Materia.belongsTo(Admin);
Herramienta.belongsTo(Admin);
Herramienta.belongsTo(Usuario);
Comentario.belongsTo(Usuario);
Comentario.belongsTo(Herramienta)

export { Solicitud, Usuario, Comentario, Herramienta, Materia, Noticia, Admin };
