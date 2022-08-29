import { createContext, Dispatch, SetStateAction, useState } from "react";
import React from "react";
import { Fragment, useContext } from "react";
import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
const NotificationsIconComponent = ({
  type,
}: {
  type: "success" | "error" | "warning" | "info";
}) => {
  switch (type) {
    case "success":
      return (
        <CheckCircleIcon
          className="h-6 w-6 text-green-400"
          aria-hidden="true"
        />
      );
    case "error":
      return (
        <ExclamationCircleIcon
          className="h-6 w-6 text-red-400"
          aria-hidden="true"
        />
      );
    case "warning":
      return (
        <CheckCircleIcon
          className="h-6 w-6 text-yellow-400"
          aria-hidden="true"
        />
      );
    case "info":
      return (
        <ExclamationCircleIcon
          className="h-6 w-6 text-blue-400"
          aria-hidden="true"
        />
      );
    default:
      return (
        <CheckCircleIcon
          className="h-6 w-6 text-green-400"
          aria-hidden="true"
        />
      );
  }
};

const NotificationsComponent = () => {
  const notificationsCtx = useContext(NotificationsContext);
  if (!notificationsCtx) {
    throw new Error("NotificationsContext not found");
  }
  const [notifications, setNotifications] = notificationsCtx;
  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 z-10 flex items-end px-4 py-6 sm:items-start sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
        <Transition
          show={notifications.show}
          as={Fragment}
          enter="transform ease-out duration-300 transition"
          enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enterTo="translate-y-0 opacity-100 sm:translate-x-0"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <NotificationsIconComponent type={notifications.type} />
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-left text-sm font-medium text-gray-900">
                    {notifications.title}
                  </p>
                  <p className="mt-1 text-left text-sm text-gray-500">
                    {notifications.message}
                  </p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => {
                      setNotifications({
                        ...notifications,
                        show: false,
                      });
                    }}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export interface NotificationsContextType {
  title: string;
  message: string;
  type: "success" | "error" | "warning" | "info";
  show: boolean;
}

export const NotificationsContext = createContext<
  | [
      NotificationsContextType,
      Dispatch<SetStateAction<NotificationsContextType>>
    ]
  | null
>(null);

export function NotificationsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState<NotificationsContextType>({
    title: "",
    message: "",
    type: "success",
    show: false,
  });

  return (
    <NotificationsContext.Provider value={[state, setState]}>
      {children}
      <NotificationsComponent />
    </NotificationsContext.Provider>
  );
}
