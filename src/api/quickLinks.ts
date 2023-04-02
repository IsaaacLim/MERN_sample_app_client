import axiosClient from "./axiosInstance";

export const quickLinksGetAll = async () => {
  const res = await axiosClient.get("quickLinks");
  return res;
};
