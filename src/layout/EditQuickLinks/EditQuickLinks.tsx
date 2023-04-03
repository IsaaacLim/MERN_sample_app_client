import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { quickLinkDelete, quickLinksGetAll } from "@/api/quickLinks";
import { IQuickLink, IQuickLinks } from "@/interfaces/QuickLink";
import EditQuickLink from "./EditQuickLink";
import { toast } from "react-hot-toast";

const EditQuickLinks = () => {
  const [quickLinks, setQuickLinks] = useState<IQuickLinks>([]);
  const { data, isLoading, isSuccess, isError, isFetching } = useQuery(
    ["quickLinks"],
    async () => {
      return await quickLinksGetAll();
    }
  );

  useEffect(() => {
    if (!isFetching && isSuccess) setQuickLinks(data?.data);
  }, [isSuccess, isFetching]);

  if (isLoading) return <p>Loading ..</p>;

  if (!quickLinks.length) {
    return (
      <span className="text-gray-900 dark:text-white italic">
        No quick links are available
      </span>
    );
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {quickLinks.map((quickLink) => (
        <li key={quickLink._id} className="w-[32.6%]">
          <EditQuickLink quickLink={quickLink} />
        </li>
      ))}
    </ul>
  );
};

export default EditQuickLinks;
