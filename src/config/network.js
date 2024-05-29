import axios from "axios";
export const api = async (body) => {
  // axios.defaults.baseURL = `http://${window.location.host}:8080`;

  const res = await axios({
    url,
    method,
    data: body,
  });

  return res;
};
