import { usersGetAll } from "@/api/users";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Welcome = () => {
  const { username } = useAuth();

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
      <p className="mb-3 text-lg font-bold text-blue-800 dark:text-blue-400">
        Welcome to Access Workspace!
      </p>
    </div>
  );
};

export default Welcome;
