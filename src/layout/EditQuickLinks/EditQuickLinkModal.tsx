import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "@/components/Button";
import { IQuickLink, QuickLinkEditData } from "@/interfaces/QuickLink";
import { useMutation, useQuery } from "@tanstack/react-query";
import { quickLinkDelete, quickLinkEdit } from "@/api/quickLinks";
import { toast } from "react-hot-toast";

const EditQuickLinkModal = ({ quickLink }: { quickLink: IQuickLink }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(quickLink.title);
  const [text, setText] = useState(quickLink.text);
  const [link, setLink] = useState(quickLink.link);

  const {
    mutate: edit,
    isSuccess,
    isError,
  } = useMutation((data: QuickLinkEditData) => quickLinkEdit(data), {});

  const deleteQuickLink = useQuery(
    ["deleteQuickLink"],
    async () => {
      return await quickLinkDelete({ id: quickLink._id }).then((res) => {
        toast.success("Quick link deleted successfully");
        setIsOpen(false);
      });
    },
    { refetchOnWindowFocus: false, enabled: false }
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    edit({ id: quickLink._id, title, text, link }); // Edit quickLink api call
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Edited quick link!");
      setIsOpen(false);
    } else if (isError) {
      toast.error("Failed to edit quick link");
    } else return;
  }, [isSuccess, isError]);

  useEffect(() => {
    if (deleteQuickLink.isError) toast.error("Failed to delete quick link");
  }, [deleteQuickLink.isError]);

  return (
    <>
      <Button type="primary" label="Edit" onClick={() => setIsOpen(true)} />
      <Transition show={isOpen} as={Fragment}>
        <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
          {/* The backdrop, rendered as a fixed sibling to the panel container */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          {/* Full-screen container to center the panel */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {/* The actual dialog panel  */}
              <Dialog.Panel className="relative w-96 bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="px-6 py-6 lg:px-8">
                  <Dialog.Title className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Edit quick link
                  </Dialog.Title>
                  <form className="space-y-6" action="#">
                    <div>
                      <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Title
                      </label>
                      <input
                        type="title"
                        name="title"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="text"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Text
                      </label>
                      <input
                        type="text"
                        name="text"
                        id="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="link"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Text
                      </label>
                      <input
                        type="link"
                        name="link"
                        id="link"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={handleSubmit}
                    >
                      Save changes
                    </button>
                  </form>
                  <div className="mt-8 space-y-3">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                      Delete this quick link?
                    </div>
                    <Button
                      type="alternative"
                      label="Delete"
                      onClick={() => deleteQuickLink.refetch()}
                      isLoading={deleteQuickLink.isLoading}
                    />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditQuickLinkModal;
