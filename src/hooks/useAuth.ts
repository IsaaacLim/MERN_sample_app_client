import jwtDecode from "jwt-decode";

type IUserInfo = {
  UserInfo: {
    username: string;
    roles: ["admin" | "customer" | "sudo"];
    status: "active";
  };
};

const useAuth = () => {
  let isSudo = false;
  let isAdmin = false;
  const token =
    typeof window !== "undefined" ? localStorage.getItem("access-token") : null;

  if (token) {
    const decoded = jwtDecode<IUserInfo>(token);
    const { username, roles } = decoded.UserInfo;

    isAdmin = roles.includes("admin");
    isSudo = roles.includes("sudo");

    return { username, roles, isAdmin, isSudo };
  }
  return { username: "", roles: [], isAdmin, isSudo };
};

export default useAuth;
