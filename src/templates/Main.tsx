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
      <div className="w-full min-h-screen p-4 sm:mx-64 bg-gray-50 dark:bg-gray-900">
        {props.children}
      </div>
      <RightSidebar />
    </div>
  );
};

export { Main };
