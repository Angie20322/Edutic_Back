import newSolicitud from "../../controllers/solicitud.controllers/newSolicitud.controllers.js";

const newSolicitudHandler = async (req, res) => {
  console.log('Esto esta llegando', req.body)
  try {
    try {
      const createUser = await newSolicitud(req.body);
      res.status(200).json(createUser);
    } catch (error) {
      console.log(error.message)
      res.status(400).json({ error: error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default newSolicitudHandler;
