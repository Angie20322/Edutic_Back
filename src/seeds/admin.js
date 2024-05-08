import bcrypt from "bcrypt";

const admin = [
  {
    nombre: "admin",
    email: "admin@correo.com",
    telefono: "3201001010",
    password: bcrypt.hashSync("123456789", 10),
    rol: "admin",
    confirmado: true,
  },
];

export default admin;
