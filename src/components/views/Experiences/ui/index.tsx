import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { ISkillsListProps } from "../types/experiences.interface";
import { SkillsContent } from "../types/experiences.interface";
import { skillsList } from "../data/skills";

import { images } from "@/constants";

import styles from "./styles.module.sass";

import { SkillItem } from "@/components/common/SkillItem";
import { LazyImage } from "@/components/common/LazyImage";

const experiencesList = [
  {
    year: (
      <h5>
        Август <span>2020</span> - Октябрь <span>2021</span>
      </h5>
    ),
    title: "Only",
    logo: images.only.src,
  },
  {
    year: (
      <h5>
        Ноябрь <span>2021</span> - Декабрь <span>2021</span>
      </h5>
    ),
    title: "Стартап",
    logo: images.startup.src,
  },
  {
    year: (
      <h5>
        Декабрь <span>2021</span> - Апрель <span>2022</span>
      </h5>
    ),
    title: "Фриланс",
    logo: images.freelance.src,
  },
  {
    year: (
      <h5>
        Август <span>2022</span> - Декабрь <span>2022</span>
      </h5>
    ),
    title: "Технополюс",
    logo: images.techno.src,
  },
  {
    year: (
      <h5>
        Октябрь <span>2022</span> - Май <span>2023</span>
      </h5>
    ),
    title: "its.agency",
    logo: images.agency.src,
  },
];

const Experiences = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  const [currentSkills, setCurrentSkills] = useState<ISkillsListProps[]>([]);

  useEffect(() => {
    skillsList.forEach((skills: ISkillsListProps) => {
      if (skills.id === currentExperience) {
        //@ts-ignore
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
              <LazyImage
                src={item.logo}
                // fill
                width={50}
                height={50}
                alt={item.title}
              />
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
