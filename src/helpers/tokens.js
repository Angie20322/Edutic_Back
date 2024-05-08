import jwt from "jsonwebtoken";
import random from "random-seedable";
import "dotenv/config";
const { JWT_SECRET_WORD } = process.env;

const triggerToken = () => Math.random().toString(20).substring(2);

const confirmToken = () => {
  return random.float().toString(36).substring(2) + Date.now().toString(36);
};

const generarJWT = (datos) => {
  const { id, nombre, email, colegio } = datos;
  const token = jwt.sign({ id, nombre, email, colegio }, JWT_SECRET_WORD, {
    expiresIn: "1d",
  });
  return token;
};

export { triggerToken, confirmToken, generarJWT };
