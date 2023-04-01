import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";
import React from "react";

const settings = () => {
  return (
    <Main meta={<Meta title="MERN | Settings" description="Settings page" />}>
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Settings
      </h1>
    </Main>
  );
};

export default settings;
