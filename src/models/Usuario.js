import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/bd.js";

const Usuario = db.define(
  "usuarios",
  {
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
    imagen: {
      type: DataTypes.STRING,
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
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    token: DataTypes.STRING,
    enlace: DataTypes.STRING,
    rol: DataTypes.STRING,
    confirmado: DataTypes.BOOLEAN,
  },
  {
    timestamps: false,
  },
  {
    hooks: {
      beforeCreate: async (usuario) => {
        const salt = await bcrypt.genSalt(10);
        usuario.password = await bcrypt.hash(usuario.password, salt);
      },
    },
  }
);

// Métodos personalizados
Usuario.prototype.verificarUsuario = function (password) {
  return bcrypt.compareSync(password, this.password);
};

export default Usuario;
