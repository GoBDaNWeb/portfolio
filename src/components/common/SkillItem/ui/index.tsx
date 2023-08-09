import { FC } from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.sass";
import { LazyImage } from "../../LazyImage";

const SkillItem: FC<any> = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.skill}
    >
      <div style={{ background: skill.bg }} className={styles.skillCircle}>
        <LazyImage src={skill.img} height={45} width={45} alt="skill" />
      </div>
      <h6>{skill.title}</h6>
    </motion.div>
  );
};

export default SkillItem;
