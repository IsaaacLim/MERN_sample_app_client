import React, { useEffect, useState } from "react";
import CreateQuickLink from "../CreateQuickLink";
import EditQuickLinks from "../EditQuickLinks";
import { IUserInfo } from "@/hooks/useAuth";
import jwtDecode from "jwt-decode";
import Link from "next/link";

const Settings = () => {
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
    <>
      <h1 className="text-3xl mb-8 font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
        Settings
      </h1>
      {!username ? (
        <div>
          <h2 className="text-xl mb-4 font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
            Oops! Please login as an admin to modify the Carousel and Quick
            Links on the right
          </h2>
          <Link
            className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
            href="/login"
          >
            Login
          </Link>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Quick Links
            </h2>
            <CreateQuickLink />
          </div>
          <div className="mt-6">
            <EditQuickLinks />
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
