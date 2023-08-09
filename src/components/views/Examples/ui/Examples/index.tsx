import { examplesList } from "./../../data/examples";

import styles from "./styles.module.sass";

import ExampleItem from "../ExampleItem";
import { motion } from "framer-motion";

const Examples = () => {
  return (
    <section className={`${styles.examples} container`}>
      <h3>
        Примеры <span>кода</span>
      </h3>
      <h6>
        *чтобы не занимать ваше время, я оставил только 2 ссылки на код,
        которые, как я считаю, отображают мои способности
      </h6>
      <h6>*приложения могут долго грузиться из-за бесплатного деплоя</h6>
      <motion.div
        className={styles.exampleList}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {examplesList.map((example) => (
          <ExampleItem
            key={example.id}
            title={example.title}
            link={example.link}
            img={example.img}
            stack={example.stack}
            front={example.front}
            back={example.back}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Examples;
