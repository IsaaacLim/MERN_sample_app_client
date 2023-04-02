import axiosClient from "./axiosInstance";

export const usersGetAll = async () => {
  const res = await axiosClient.get("users");
  return res;
};
