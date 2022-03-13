import React from "react";
import styles from "./index.module.scss";
import { Scale } from "../../types";

interface Props {
  padding?: Scale;
  borderWidth?: string;
  invert?: boolean;
}

export const Box: React.FC<Props> = ({
  padding = "s1",
  borderWidth = "var(--border-thin)",
  invert = false,
  children,
}) => {
  const style = {
    border: `${borderWidth} solid`,
    outline: `${borderWidth} transparent`,
    outlineOffset: `calc(${borderWidth} * -1)`,
  };

  return (
    <div
      className={`${styles.box} ${styles[padding]} ${
        invert ? styles.invert : ""
      } `}
      style={style}
    >
      {children}
    </div>
  );
};
