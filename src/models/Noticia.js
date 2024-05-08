import { DataTypes } from "sequelize";
import db from "../config/bd.js";

const Noticia = db.define("noticias", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  publicado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default Noticia;
