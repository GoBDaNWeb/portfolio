// * react
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

// * services
import { getSkills } from '../../services/skillApi';

// * styles
import './Skills.scss';

const Skills = () => {
	const [skills, setSkills] = useState([]);

	const fetchSkills = async () => {
		const response = await getSkills()
		setSkills(response)
	}

	useEffect(() => {
		fetchSkills()
	}, []);

	return (
		<>
			<h2 className="head-text">Работал С</h2>

			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{
						skills.map((skill) => (
							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="app__skills-item app__flex"
								key={skill.name}
							>
								<div
									className="app__flex"
									style={{ backgroundColor: skill.bgColor }}
								>
									<img src={skill.icon.url} alt={skill.name} />
								</div>
								<p className="p-text">
									{skill.name}
								</p>
							</motion.div>
						))
					}
				</motion.div>
			</div>
		</>
 	 );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
