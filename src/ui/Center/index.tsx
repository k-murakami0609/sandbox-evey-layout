import React, { CSSProperties } from "react";
import styles from "./index.module.scss";

interface Props {
  max?: string;
  andText?: boolean;
  gutters?: string;
  intrinsic?: boolean;
}

export const Center: React.FC<Props> = ({
  max = "var(--measure)",
  andText = false,
  gutters = "0",
  intrinsic = false,
  children,
}) => {
  const style: CSSProperties = {
    maxInlineSize: max,
    paddingInlineStart: gutters,
    paddingInlineEnd: gutters,
  };
  return (
    <div
      className={`${styles.center} ${andText ? styles.andText : ""} ${
        intrinsic ? styles.intrinsic : ""
      }`}
      style={style}
    >
      {children}
    </div>
  );
};
