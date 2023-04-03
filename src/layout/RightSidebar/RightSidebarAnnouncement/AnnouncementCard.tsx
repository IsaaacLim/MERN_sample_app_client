import Image from "next/image";
import React from "react";

type IAnnouncementCard = {
  title: string;
  text: string;
};

const AnnouncementCard = ({ title, text }: IAnnouncementCard) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Image
        className="rounded-t-lg"
        src="/static/sample.jpg"
        alt="sample"
        width={400}
        height={200}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {text}
        </p>
        <span className="inline-flex items-center align-top px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-not-allowed">
          Read more
        </span>
      </div>
    </div>
  );
};

export default AnnouncementCard;
