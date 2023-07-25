import { FC } from "react";

import { IExampleItemProps } from "../../types/exampleItem.interface";

import styles from "./styles.module.sass";

import { LazyImage } from "@/components/common/LazyImage";

const ExampleItem: FC<IExampleItemProps> = ({
  img,
  title,
  link,
  stack,
  front,
  back,
}) => {
  return (
    <div className={styles.exampleItem}>
      <a href={link} target="_blank">
        <LazyImage src={img} fill alt={title} />
      </a>

      <div>
        <h5>{title}</h5>
        <div className={styles.stack}>
          {stack.map((stackItem) => (
            <div key={stackItem}>{stackItem}</div>
          ))}
        </div>
        <div className={styles.btns}>
          <a href={front} target="_blank">
            Код FrontEnd
          </a>
          {back ? (
            <a href={back} target="_blank">
              Код BackEnd
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ExampleItem;
