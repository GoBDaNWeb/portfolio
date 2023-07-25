import { FC, useState } from "react";
import Image from "next/image";

import { ILazyImageProps } from "../types/lazyImage.interface";

import styles from "./styles.module.sass";

const LazyImage: FC<ILazyImageProps> = ({ src, width, height, fill, alt }) => {
  const [imageLoading, setImageLoding] = useState(true);
  return (
    <div
      className={`${styles.imageWrapper} ${imageLoading ? styles.blur : ""}`}
    >
      <Image
        loading="lazy"
        src={src}
        sizes="100vw"
        width={width}
        height={height}
        fill={fill}
        alt={alt}
        onLoadingComplete={() => setImageLoding(false)}
      />
    </div>
  );
};

export default LazyImage;
