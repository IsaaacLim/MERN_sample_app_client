import { useMutation } from "@tanstack/react-query";
import axiosClient from "@/api/axiosInstance";

export type LoginData = {
  username: string;
  password: string;
};

export const postUserData = async (data: LoginData) => {
  const res = await axiosClient.post("auth", data).then((res) => {
    console.log(res);
    return {
      auth_token: res.data["accessToken"],
      refresh_token: res.data["refreshToken"],
    };
  });

  return res;
};
