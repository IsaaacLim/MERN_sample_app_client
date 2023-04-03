import { IUserInfo } from "@/hooks/useAuth";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";

const Welcome = () => {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("access-token")
        : null;

    if (token) {
      const decoded = jwtDecode<IUserInfo>(token);
      const { username: name } = decoded.UserInfo;
      setUsername(name);
    }
  }, []);

  return (
    <div
      id="dropdown-cta"
      className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900"
      role="alert"
    >
      {username && (
        <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
          Hi, {username}
        </p>
      )}
      <p className="text-lg font-bold text-blue-800 dark:text-blue-400">
        Welcome to Access Workspace!
      </p>
    </div>
  );
};

export default Welcome;
