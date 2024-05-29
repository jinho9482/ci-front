import axios from "axios";

export const api = async (url, method, body) => {
  axios.defaults.baseURL = `http://${location.host}:8082`;

  const res = await axios({
    url,
    method,
    data: body,
  });

  return res;
};
