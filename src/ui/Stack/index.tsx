import React from "react";
import styles from "./index.module.scss";
import { Scale } from "../../types";

interface Props {
  space: Scale;
  // recursive: boolean;
  // splitAfter: number;
}

export const Stack: React.FC<Props> = ({ space, children }) => {
  return <div className={`${styles.stack} ${styles[space]}`}>{children}</div>;
};
