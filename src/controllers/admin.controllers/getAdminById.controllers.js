import { Admin } from "../../models/index.js";

const getAdminById = (id) => {
  try {
    const admin = Admin.findOne({
      where: { id: id },
    });
    return admin;
  } catch (error) {
    return error.message;
  }
};

export default getAdminById;
