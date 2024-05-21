import { api } from "../config/network";

export const postInfo = async (data) => {
  await api("/api/v1/boards", "post", data);
};

export const getList = async () => {
  const res = await api("/api/v1/boards", "get");
  // console.log(res);
  return res.data;
};
