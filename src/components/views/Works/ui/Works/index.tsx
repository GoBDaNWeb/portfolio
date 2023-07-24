import { worksList } from "../../data/works";

import styles from "./styles.module.sass";

import WorkItem from "../WorkItem";
import { motion } from "framer-motion";

const Works = () => {
  return (
    <section className={`${styles.works} container`}>
      <h3>
        Мои недавние <span>работы</span>
      </h3>
      <motion.div
        className={styles.workList}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {worksList.map((work) => (
          <WorkItem
            key={work.title}
            img={work.img}
            title={work.title}
            link={work.url}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Works;
