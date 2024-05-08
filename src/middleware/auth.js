import "dotenv/config";
import jwt from "jsonwebtoken";

const { JWT_SECRET_WORD } = process.env;

function auth(req, res, next) {
  const authHeader = req.get("Authorization");

  // Comprobar si existe autorización en el localStorage
  if (!authHeader) {
    const error = new Error("No posee autorizacion");
    return res.status(401).json({ error: error.message });
  }

  // Obtener el token y verificarlo
  const token = authHeader.split(" ")[1];
  let revisarToken;
  try {
    revisarToken = jwt.verify(token, JWT_SECRET_WORD);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }

  // Token válido, pero hubo un error
  if (!revisarToken) {
    const error = new Error("Sin autorizacion");
    return res.status(401).json(error);
  }
  next();
}

export default auth;
