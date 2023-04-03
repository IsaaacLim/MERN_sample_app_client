import { Meta } from "@/layout/Meta";
import Settings from "@/layout/Settings";
import { Main } from "@/templates/Main";
import React from "react";

const settings = () => {
  return (
    <Main meta={<Meta title="MERN | Settings" description="Settings page" />}>
      <Settings />
    </Main>
  );
};

export default settings;
