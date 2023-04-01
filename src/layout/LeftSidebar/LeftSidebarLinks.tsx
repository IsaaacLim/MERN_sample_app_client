import React from "react";

const LeftSidebarLinks = () => {
  return (
    <ul className="space-y-2 font-medium">
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {/* icon */}
          <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {/* icon */}
          <span className="flex-1 ml-3 whitespace-nowrap">
            My Products & Flightpaths
          </span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {/* icon */}
          <span className="flex-1 ml-3 whitespace-nowrap">Resources</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {/* icon */}
          <span className="flex-1 ml-3 whitespace-nowrap">
            SOW / Service Requests
          </span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {/* icon */}
          <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
        </a>
      </li>
    </ul>
  );
};

export default LeftSidebarLinks;
