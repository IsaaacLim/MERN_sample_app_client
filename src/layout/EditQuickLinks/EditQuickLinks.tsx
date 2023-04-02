import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { quickLinksGetAll } from "@/api/quickLinks";
import { IQuickLinks } from "@/interfaces/QuickLink";
import EditQuickLink from "./EditQuickLink";

const EditQuickLinks = () => {
  const [quickLinks, setQuickLinks] = useState<IQuickLinks>([]);
  const { data, isLoading, isSuccess, isError } = useQuery(
    ["quickLinks"],
    async () => {
      return await quickLinksGetAll();
    }
  );

  useEffect(() => {
    if (!isSuccess) return;
    setQuickLinks(data?.data);
  }, [isSuccess]);

  if (isLoading) return <p>Loading ..</p>;

  if (!quickLinks.length) {
    return (
      <span className="text-gray-900 dark:text-white italic">
        No quick links are available
      </span>
    );
  }

  return (
    <ul className="grid grid-flow-col grid-cols-3 gap-2">
      {quickLinks.map((quickLink) => (
        <li key={quickLink._id}>
          <EditQuickLink quickLink={quickLink} />
        </li>
      ))}
    </ul>
  );
};

export default EditQuickLinks;
