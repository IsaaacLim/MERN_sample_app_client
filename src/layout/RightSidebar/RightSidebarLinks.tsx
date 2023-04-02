import React, { useEffect, useState } from "react";
import { quickLinksGetAll } from "@/api/quickLinks";
import { useQuery } from "@tanstack/react-query";
import { HiOutlineExternalLink } from "react-icons/hi";

type IQuickLinks = {
  _id: string;
  title: string;
  text: string;
  link: string;
}[];

const RightSidebarLinks = () => {
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

  return (
    <div className="mt-12">
      <h2 className="text-white text-xl font-bold">Quick Links</h2>
      <div
        id="dropdown-cta"
        className="p-4 mt-4 rounded-lg bg-blue-50 dark:bg-blue-900"
        role="alert"
      >
        {isError ? (
          <span className="text-gray-900 dark:text-white italic">
            Oops something went wrong
          </span>
        ) : (
          <LinksView quickLinks={quickLinks} />
        )}
      </div>
    </div>
  );
};

const LinksView = ({ quickLinks }: { quickLinks: IQuickLinks }) => {
  if (!quickLinks.length) {
    return (
      <span className="text-gray-900 dark:text-white italic">
        No quick links are available
      </span>
    );
  }
  return (
    <ul className="space-y-2 font-medium">
      {quickLinks.map((quickLink) => (
        <li key={quickLink._id}>
          <a
            href={quickLink.link}
            className="grid grid-flow-row grid-cols-7 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            target="_blank"
            rel="noreferrer"
          >
            <div className="text-4xl">
              <HiOutlineExternalLink />
            </div>
            <p className="flex flex-col col-span-6">
              <span className="flex-1 ml-3 text-sm">{quickLink.title}</span>
              <span className="flex-1 ml-3 font-semibold">
                {quickLink.text}
              </span>
            </p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RightSidebarLinks;
