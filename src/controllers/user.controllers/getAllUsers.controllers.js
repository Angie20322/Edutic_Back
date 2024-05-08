import { Usuario } from "../../models/index.js";

const getAllUsers = async () => {
  const users = await Usuario.findAll();
  return users;
};

export default getAllUsers