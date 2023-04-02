import axiosClient from "./axiosInstance";

export type LoginData = {
  username: string;
  password: string;
};

export const authLogin = async (data: LoginData) => {
  const res = await axiosClient.post("auth", data).then((res) => {
    return {
      auth_token: res.data["accessToken"],
    };
  });

  return res;
};

export const authLogout = async () => {
  const res = await axiosClient.post("auth/logout");
  return res;
};
