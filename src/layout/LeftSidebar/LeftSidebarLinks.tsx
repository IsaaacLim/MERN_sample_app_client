import React from "react";
import { MdFavoriteBorder, MdOutlineAccessTime } from "react-icons/md";
import { FiHome, FiSettings, FiShoppingCart } from "react-icons/fi";

const LeftSidebarLinks = () => {
  return (
    <ul className="mt-6 space-y-2 font-medium">
      <li>
        <a
          href=""
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FiHome />
          <span className="flex-1 ml-3">Home</span>
        </a>
      </li>
      <li>
        <p className="flex items-center p-2 text-gray-500 hover:cursor-not-allowed">
          <MdOutlineAccessTime />
          <span className="flex-1 ml-3">My Products & Flightpaths</span>
        </p>
      </li>
      <li>
        <p className="flex items-center p-2 text-gray-500 hover:cursor-not-allowed">
          <MdFavoriteBorder />
          <span className="flex-1 ml-3">Resources</span>
        </p>
      </li>
      <li>
        <p className="flex items-center p-2 text-gray-500 hover:cursor-not-allowed">
          <FiShoppingCart />
          <span className="flex-1 ml-3">SOW / Service Requests</span>
        </p>
      </li>
      <li>
        <a
          href="/settings"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FiSettings />
          <span className="flex-1 ml-3">Settings</span>
        </a>
      </li>
    </ul>
  );
};

export default LeftSidebarLinks;
