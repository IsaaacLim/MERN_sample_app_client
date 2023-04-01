import type { ReactNode } from "react";

import LeftSidebar from "@/layout/LeftSidebar/LeftSidebar";
import RightSidebar from "@/layout/RightSidebar/RightSidebar";

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
