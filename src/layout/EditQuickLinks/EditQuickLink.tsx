import React, { useEffect, useState } from "react";
import { IQuickLink } from "@/interfaces/QuickLink";
import { FiEdit } from "react-icons/fi";
import Button from "@/components/Button";
import { useQuery } from "@tanstack/react-query";
import { quickLinkDelete } from "@/api/quickLinks";
import { toast } from "react-hot-toast";
import EditQuickLinkModal from "./EditQuickLinkModal";

interface IEditQuickLink {
  quickLink: IQuickLink;
  deleteQuickLink: any;
  setSelectedQuickLink: any;
}

const EditQuickLink = (props: IEditQuickLink) => {
  const { quickLink, deleteQuickLink, setSelectedQuickLink } = props;

  return (
    <div className="h-full flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Title</p>
        <p className="mb-3 text-gray-900 dark:text-white">{quickLink.title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Text</p>
        <p className="mb-3 text-gray-900 dark:text-white">{quickLink.text}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Link</p>
        <p className="mb-3 text-gray-900 dark:text-white">{quickLink.link}</p>
      </div>
      <EditQuickLinkModal quickLink={quickLink} />
    </div>
  );
};

export default EditQuickLink;
