import { authLogout } from "@/api/auth";
import { IUserInfo } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const LeftSidebarCTA = () => {
  const [username, setUsername] = useState<string>("");
  const router = useRouter();

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

  const { refetch } = useQuery(
    ["logout"],
    async () => {
      return await authLogout();
    },
    { refetchOnWindowFocus: false, enabled: false }
  );

  const logout = () => {
    refetch();
    localStorage.removeItem("access-token");
    toast.success("Logged out");
    router.push("/");
  };

  return (
    <div
      id="dropdown-cta"
      className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
      role="alert"
    >
      {username ? (
        <div>
          <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
            Done being an admin?
          </p>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
            Please login to modify page contents
          </p>
          <Link
            className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
            href="/login"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default LeftSidebarCTA;
