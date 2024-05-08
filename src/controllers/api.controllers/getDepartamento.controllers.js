import axios from "axios";
const { API_KEY } = process.env;

const getDepartamento = async () => {
  var options = {
    method: "GET",
    url: `https://www.datos.gov.co/resource/xd7j-ypd4.json`,
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

export default getDepartamento
