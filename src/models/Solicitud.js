import { DataTypes } from "sequelize";
import db from "../config/bd.js";

const Solicitud = db.define("solicitudes", {
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
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  departamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  colegio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  materia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  enfasis: {
    type: DataTypes.STRING,
  },
  token: DataTypes.STRING,
  rol: DataTypes.STRING,
});

export default Solicitud;
