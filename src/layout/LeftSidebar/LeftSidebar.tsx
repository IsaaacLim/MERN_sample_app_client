import React from "react";
import LeftSidebarWelcome from "./LeftSidebarWelcome";
import LeftSidebarCTA from "./LeftSidebarCTA";
import LeftSidebarLinks from "./LeftSidebarLinks";
import { GiHamburgerMenu } from "react-icons/gi";

const LeftSidebar = () => {
  return (
    <>
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <GiHamburgerMenu />
      </button>

      <aside
        id="cta-button-sidebar"
        className="fixed top-0 left-0 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex flex-col justify-between">
          <div>
            <LeftSidebarWelcome />
            <LeftSidebarLinks />
          </div>
          <LeftSidebarCTA />
        </div>
      </aside>
    </>
  );
};

export default LeftSidebar;
