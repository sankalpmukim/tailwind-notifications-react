import { useCallback, useContext } from "react";
import {
  NotificationsContext,
  NotificationsContextType,
} from "../NotificationsContext";

export interface ExtraOptionsNotify {
  autoDisappear?: boolean;
}

type NotifyInput = Omit<NotificationsContextType, "show"> & ExtraOptionsNotify;

const useNotify = () => {
  const notificationsCtx = useContext(NotificationsContext);
  if (!notificationsCtx) {
    throw new Error("useNotify must be used within a NotificationsProvider");
  }
  const setNotifications = notificationsCtx[1];
  const notify = useCallback(
    ({ message, title, type, autoDisappear = true }: NotifyInput) => {
      setNotifications({ message, title, type, show: true });
      if (autoDisappear) {
        setTimeout(() => {
          setNotifications({ message, title, type, show: false });
        }, 3000);
      }
    },
    [setNotifications]
  );
  return notify;
};

export default useNotify;
