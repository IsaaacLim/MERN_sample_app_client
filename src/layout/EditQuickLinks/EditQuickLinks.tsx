import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { quickLinkDelete, quickLinksGetAll } from "@/api/quickLinks";
import { IQuickLink, IQuickLinks } from "@/interfaces/QuickLink";
import EditQuickLink from "./EditQuickLink";
import { toast } from "react-hot-toast";

const EditQuickLinks = () => {
  const [quickLinks, setQuickLinks] = useState<IQuickLinks>([]);
  const [selectedQuickLink, setSelectedQuickLink] = useState<IQuickLink>();
  const { data, isLoading, isSuccess, isError } = useQuery(
    ["quickLinksssss"],
    async () => {
      return await quickLinksGetAll();
    }
  );
  const deleteQuickLink = useQuery(
    ["deleteQuickLink", selectedQuickLink?._id],
    async (data) => {
      return await quickLinkDelete({ id: data }).then((res) => {
        toast.success("Quick link deleted successfully");
      });
    },
    { refetchOnWindowFocus: false, enabled: false }
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
    <ul className="grid grid-flow-col grid-col-3 gap-2">
      {quickLinks.map((quickLink) => (
        <li key={quickLink._id} className="col-span-1">
          <EditQuickLink
            quickLink={quickLink}
            deleteQuickLink={deleteQuickLink}
            setSelectedQuickLink={setSelectedQuickLink}
          />
        </li>
      ))}
    </ul>
  );
};

export default EditQuickLinks;
