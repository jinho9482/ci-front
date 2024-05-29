import { api } from "../config/network";

export const postInfo = async (data) => {
  await api("post", data);
};

export const getList = async () => {
  const res = await api("get");
  return res.data;
};
