import { Meta } from "@/layout/Meta";
import { Main } from "@/templates/Main";
import React from "react";

const settings = () => {
  return (
    <Main meta={<Meta title="MERN | Settings" description="Settings page" />}>
      <div>settings</div>
    </Main>
  );
};

export default settings;
