import { DataTypes } from "sequelize";
import bcrypt from "bcrypt";
import db from "../config/bd.js";

const Admin = db.define(
  "admins",
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    rol: DataTypes.STRING,
    enlace: DataTypes.STRING,
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
Admin.prototype.verificarUsuario = function (password) {
  return bcrypt.compareSync(password, this.password);
};

export default Admin;
