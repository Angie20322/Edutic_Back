import { DataTypes } from "sequelize";
import db from "../config/bd.js";

const Comentario = db.define("comentarios", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  comentario: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

export default Comentario;
