import { FC } from "react";
import { IWorkItenProps } from "../types/workItem.interface";

import styles from "./styles.module.sass";
import { LazyLoadImage } from "react-lazy-load-image-component";

const WorkItem: FC<IWorkItenProps> = ({ img, title, link }) => {
  return (
    <a href={link} target="_blank" className={styles.workItem}>
      <LazyLoadImage height="100%" alt={title} effect="blur" src={img} />
      {/* <img src={img} alt={title} /> */}
      <h5>{title}</h5>
    </a>
  );
};

export default WorkItem;
