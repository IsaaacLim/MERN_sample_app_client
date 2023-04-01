import React from "react";

const Welcome = () => {
  return (
    <div
      id="dropdown-cta"
      className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
      role="alert"
    >
      <div className="flex items-center mb-3">
        <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
          Beta
        </span>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
          data-dismiss-target="#dropdown-cta"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          {/* icon */}
        </button>
      </div>
      <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
        Preview the new Flowbite dashboard navigation! You can turn the new
        navigation off for a limited time in your profile.
      </p>
      <a
        className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
        href="#"
      >
        Turn new navigation off
      </a>
    </div>
  );
};

export default Welcome;
