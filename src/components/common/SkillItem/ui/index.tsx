import { FC } from "react";

import { motion } from "framer-motion";
import styles from "./styles.module.sass";

const SkillItem: FC<any> = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.skill}
    >
      <div style={{ background: skill.bg }} className={styles.skillCircle}>
        <img src={skill.img} alt="" />
      </div>
      <h6>{skill.title}</h6>
    </motion.div>
  );
};

export default SkillItem;
