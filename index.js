import express from "express";
import "dotenv/config";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import userRoutes from "./src/routes/user.routes.js";
import apiRoutes from "./src/routes/api.routes.js";
import solicitudRoutes from "./src/routes/solicitud.routes.js";
import herramientasRoutes from "./src/routes/herramientas.routes.js";
import materiasRoutes from "./src/routes/materias.routes.js";
import noticiasRoutes from "./src/routes/noticias.routes.js";
import adminRoutes from "./src/routes/admin.routes.js";
import comentariosRoutes from "./src/routes/comentarios.routes.js";
import passwordRoutes from "./src/routes/passwords.routes.js";
import db from "./src/config/bd.js";

const { PORT } = process.env;

// Crear la app
const app = express();

// Habilitacion de cors
app.use(cors());

// Habilitar morgan
app.use(morgan("dev"));

// Habilitar lectura de formularios
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Conexión a la base de datos
try {
  await db.authenticate();
  db.sync();
  console.log("Conexión correcta a la base de datos");
} catch (error) {
  console.log(error);
}

// Rutas

app.use("/usuarios", userRoutes);
app.use("/colombia", apiRoutes);
app.use("/solicitud", solicitudRoutes);
app.use("/herramientas", herramientasRoutes);
app.use("/materias", materiasRoutes);
app.use("/noticias", noticiasRoutes);
app.use("/admin", adminRoutes);
app.use("/comentarios", comentariosRoutes);
app.use("/password", passwordRoutes);

// Definicion de puerto y arranque de Api
const port = PORT || 3001;

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
