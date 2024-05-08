import axios from "axios";
const { API_KEY } = process.env;

const getCiudad = async (state) => {
  var options = {
    method: "GET",
    url: `https://www.datos.gov.co/resource/95qx-tzs7.json?departamento=${state}`,
    headers: {
      "X-CSCAPI-KEY": API_KEY,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default getCiudad
