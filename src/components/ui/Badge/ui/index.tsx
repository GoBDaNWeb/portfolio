import { FC, PropsWithChildren } from "react";
import { IBadgeProps } from "../types/badge.interface";
import styles from "./styles.module.sass";

const Badge: FC<PropsWithChildren<IBadgeProps>> = ({
  height = "50",
  width = "200",
  children,
}) => {
  return <div className={styles.badge}>{children}</div>;
};

export default Badge;
