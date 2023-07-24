import { FC, PropsWithChildren } from "react";
import { ICircleProps } from "../types/circle.interface";
import styles from "./styles.module.sass";

const Circle: FC<PropsWithChildren<ICircleProps>> = ({
  width = "100",
  height = "100",
  children,
}) => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={styles.circle}
    >
      {children}
    </div>
  );
};

export default Circle;
