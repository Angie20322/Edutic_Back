import { Admin } from "../../models/index.js";

const setEditarAdmin = async (update, id) => {
  const admin = await Admin.findByPk(id);

  if (!admin) {
    throw new Error("Admin no encontrado");
  }
  try {
    await admin.update(update);
    return admin;
  } catch (error) {
    return { error: error.message };
  }
};

export default setEditarAdmin;
