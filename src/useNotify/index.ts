import { useCallback, useContext } from "react";
import {
  NotificationsContext,
  NotificationsContextType,
} from "../NotificationsContext";

type NotifyInput = Omit<NotificationsContextType, "show">;

const useNotify = () => {
  const notificationsCtx = useContext(NotificationsContext);
  if (!notificationsCtx) {
    throw new Error("useNotify must be used within a NotificationsProvider");
  }
  const setNotifications = notificationsCtx[1];
  const notify = useCallback(
    ({ message, title, type }: NotifyInput) => {
      console.log("notify", message, title, type);
      setNotifications({ message, title, type, show: true });
    },
    [setNotifications]
  );
  return notify;
};

export default useNotify;
