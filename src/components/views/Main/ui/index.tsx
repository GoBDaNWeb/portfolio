import { motion } from "framer-motion";
import { Badge } from "../../../ui/Badge";
import { Circle } from "../../../ui/Circle";
import styles from "./styles.module.sass";
import { images } from "../../../../constants";

const Main = () => {
  return (
    <section className={`${styles.main} container`}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.mainInfo}
      >
        <div className={styles.mainBadges}>
          <Badge>
            <span style={{ fontSize: "2.5rem" }}>👋</span>
            <div>
              <p className="semi-text">Привет, я</p>
              <h2 className="head-text">Богдан</h2>
            </div>
          </Badge>
          <Badge>
            <p className="semi-text">FRONTEND DEVELOPER</p>
          </Badge>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className={styles.mainImg}
      >
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          loading="eager"
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.circle}
          src={images.circle}
          alt="profile_circle"
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          loading="eager"
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          className={styles.profile}
          src={images.profile}
          alt="profile_circle"
        />
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={styles.mainCircles}
      >
        <Circle>
          <img src={images.react} alt="" loading="eager" />
        </Circle>
        <Circle width="150" height="150">
          <img src={images.redux} alt="" loading="eager" />
        </Circle>
        <Circle>
          <img src={images.sass} alt="" loading="eager" />
        </Circle>
      </motion.div>
    </section>
  );
};

export default Main;
