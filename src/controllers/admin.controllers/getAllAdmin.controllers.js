import { Admin } from "../../models/index.js";

const getAllAdmin = async () => {
  const admins = await Admin.findAll();
  return admins;
};

export default getAllAdmin;
