import axios, { HeadersDefaults } from "axios";
import { toast } from "react-hot-toast";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://mern-sample-app-api.onrender.com"
    : "http://localhost:3500";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = baseURL;

type headers = {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
};

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
} as any;
// } as headers & HeadersDefaults;

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

// Refreshing expired Access Token
axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    console.log({ err, originalConfig });

    if (originalConfig.url !== "auth" && err.response) {
      // Access Token was expired
      //   if (err.response.status === 401 && !originalConfig._retry) {
      //     originalConfig._retry = true;

      //     try {
      //       const rs = await axios.post(`${baseURL}/auth/refresh`);

      //       const access = rs.data["accessToken"];

      //       localStorage.setItem("access-token", access);

      //       return axiosClient(originalConfig);
      //     } catch (_error) {
      //       console.log(_error);
      //       toast.error("Session time out. Please login again. Redirecting...", {
      //         id: "sessionTimeOut",
      //       });
      //       // Logging out the user by removing all the tokens from local
      //       localStorage.removeItem("access-token");
      //       // Redirecting the user to the login page
      //       window.location.href = `${window.location.origin}/login`;
      //       return Promise.reject(_error);
      //     }
      //   } else if (err.response.status === 403) {
      //     toast.error("Session time out. Please login again. Redirecting...", {
      //       id: "sessionTimeOut",
      //     });
      //     // Refresh Token was expired
      //     try {
      //       await axios.post(`${baseURL}/auth/logout`);
      //       localStorage.removeItem("access-token");
      //       // Redirecting the user to the login page
      //       window.location.href = `${window.location.origin}/login`;
      //       return axiosClient(originalConfig);
      //     } catch (_error) {
      //       console.log(_error);
      //     }
      //   }
      // }

      if (err.response.status === 401 || err.response.status === 403) {
        originalConfig._retry = true;
        toast.error("Session time out. Please login again. Redirecting...", {
          id: "sessionTimeOut",
        });
        // Logging out the user by removing all the tokens from local
        localStorage.removeItem("access-token");
        // Redirecting the user to the login page
        window.location.href = `${window.location.origin}/login`;
      }
    }

    return Promise.reject(err);
  }
);

export default axiosClient;
