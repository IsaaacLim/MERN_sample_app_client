import React from "react";
import { IQuickLink } from "@/interfaces/QuickLink";
import { FiEdit } from "react-icons/fi";

const EditQuickLink = ({ quickLink }: { quickLink: IQuickLink }) => {
  return (
    <div className="h-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {quickLink.title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {quickLink.text}
      </p>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {quickLink.link}
      </p>
      <a
        href="#"
        className="inline-flex items-center text-blue-600 hover:underline"
      >
        edit <FiEdit />
      </a>
    </div>
  );
};

export default EditQuickLink;
