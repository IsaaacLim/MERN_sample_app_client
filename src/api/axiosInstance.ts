import axios, { HeadersDefaults } from "axios";

const axiosClient = axios.create();

axiosClient.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.example.org/"
    : "http://localhost:3500";

type headers = {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
};

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
} as headers & HeadersDefaults;

// Adding Authorization header for all requests
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers!["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosClient;
