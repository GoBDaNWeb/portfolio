import { mainStack, secondStack } from "../data/stack";

import styles from "./styles.module.sass";

import { SkillItem } from "@/components/common/SkillItem";
import { motion } from "framer-motion";

const Stack = () => {
  return (
    <section className={`${styles.stack} container`}>
      <h3>
        Мой <span>стэк</span>
      </h3>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.skills}>
          <h5>Основное:</h5>
          <div className={styles.skillsList}>
            {mainStack.map((skill) => (
              <SkillItem skill={skill} key={skill.title} />
            ))}
          </div>
        </div>
        <div>
          <h5>Был опыт:</h5>
          <div className={styles.skillsList}>
            {secondStack.map((skill) => (
              <SkillItem skill={skill} key={skill.title} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Stack;
