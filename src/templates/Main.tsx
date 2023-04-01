import type { ReactNode } from "react";

import RightSidebar from "@/layout/RightSidebar";
import LeftSidebar from "@/layout/LeftSidebar";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div className="antialiased flex">
      {props.meta}
      <LeftSidebar />
      <div className="p-4 sm:mx-64 w-full">{props.children}</div>
      <RightSidebar />
    </div>
  );
};

export { Main };
