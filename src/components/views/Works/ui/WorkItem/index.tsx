import { FC } from "react";
import { IWorkItenProps } from "../types/workItem.interface";

import styles from "./styles.module.sass";

const WorkItem: FC<IWorkItenProps> = ({ img, title, link }) => {
  return (
    <a href={link} target="_blank" className={styles.workItem}>
      <img src={img} alt={title} />
      <h5>{title}</h5>
    </a>
  );
};

export default WorkItem;
