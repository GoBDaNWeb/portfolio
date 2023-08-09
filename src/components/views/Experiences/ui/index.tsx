import { useState, useEffect } from "react";
import { images } from "../../../../constants";
import styles from "./styles.module.sass";
import { ISkillsListProps } from "../types/experiences.interface";
import { SkillItem } from "../../../common/SkillItem";
import { skillsList } from "../data/skills";
import { motion } from "framer-motion";
const experiencesList = [
  {
    year: (
      <h5>
        Август <span>2020</span> - Октябрь <span>2021</span>
      </h5>
    ),
    title: "Only",
    logo: images.only,
  },
  {
    year: (
      <h5>
        Ноябрь <span>2021</span> - Декабрь <span>2021</span>
      </h5>
    ),
    title: "Стартап",
    logo: images.startup,
  },
  {
    year: (
      <h5>
        Декабрь <span>2021</span> - Апрель <span>2022</span>
      </h5>
    ),
    title: "Фриланс",
    logo: images.freelance,
  },
  {
    year: (
      <h5>
        Август <span>2022</span> - Декабрь <span>2022</span>
      </h5>
    ),
    title: "Технополюс",
    logo: images.techno,
  },
  {
    year: (
      <h5>
        Октябрь <span>2022</span> - Май <span>2023</span>
      </h5>
    ),
    title: "its.agency",
    logo: images.agency,
  },
];

const Experiences = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  const [currentSkills, setCurrentSkills] = useState<ISkillsListProps[]>([]);

  useEffect(() => {
    skillsList.forEach((skills: ISkillsListProps) => {
      if (skills.id === currentExperience) {
        setCurrentSkills(skills.content);
      }
    });
  }, [currentExperience]);

  return (
    <section className={`${styles.experiences} container`}>
      <h3>
        Стэк <span>&</span> Опыт
      </h3>
      <h6>
        *при наведении на компанию отобразится стек на котором я в ней работал
      </h6>

      <motion.div
        className={styles.experiencesData}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.skillsList}>
          {currentSkills.map((skill) => (
            <SkillItem skill={skill} key={skill.id} />
          ))}
        </div>
        <div className={styles.experiencesList}>
          {experiencesList.map((item, index) => (
            <div
              onMouseEnter={() => setCurrentExperience(index)}
              onClick={() => setCurrentExperience(index)}
              key={item.title}
              className={styles.experience}
            >
              <img src={item.logo} alt={item.title} />
              <div className={styles.experienceContent}>
                <h4
                  className={currentExperience === index ? `activeTitle` : ""}
                >
                  {item.title}
                </h4>
                <div>{item.year}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experiences;
