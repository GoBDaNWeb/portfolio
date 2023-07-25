import { FC } from "react";
import { IWorkItenProps } from "../types/workItem.interface";

import styles from "./styles.module.sass";
import { LazyImage } from "@/components/common/LazyImage";

const WorkItem: FC<IWorkItenProps> = ({ img, title, link }) => {
  return (
    <a href={link} target="_blank" className={styles.workItem}>
      <LazyImage src={img} alt={title} fill />
      <h5>{title}</h5>
    </a>
  );
};

export default WorkItem;
