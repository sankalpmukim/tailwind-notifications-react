import * as React from "react";
import {
  NotificationsContext as NotificationsContextI,
  NotificationsProvider as NotificationsProviderI,
} from "./NotificationsContext";
import styles from "./styles.module.css";
import "./tailwind.css";
import useNotifyI from "./useNotify";

interface Props {
  text: string;
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>;
};

export const useNotify = useNotifyI;
export const NotificationsContext = NotificationsContextI;
export const NotificationsProvider = NotificationsProviderI;
