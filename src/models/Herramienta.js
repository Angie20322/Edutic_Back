import { DataTypes } from "sequelize";
import db from "../config/bd.js";

const Herramienta = db.define("herramientas", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  manual: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  video: {
    type: DataTypes.STRING,
  },
  publicado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export default Herramienta;
