import React from "react";
import styles from "./index.module.css";

interface Props {}

export const Stack: React.FC<Props> = ({ children }) => {
  return <div className={styles.stack}>{children}</div>;
};
