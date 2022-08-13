// * react
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';

// * services 
import {getWorks} from '../../services/workApi'

// * icons
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

// * styles
import './Work.scss';

// * components
import Image from './Image/index'

const Work = () => {
	const [works, setWorks] = useState([]);

	const fetchworks = async () => {
		const response = await getWorks()
		setWorks(response)
	}

	useEffect(() => {
		fetchworks()
	}, [])

	return (
		<>
		<h2 className="head-text">Мое <span>Портфолио</span></h2>

		<motion.div
			transition={{ duration: 0.5, delayChildren: 0.5 }}
			className='portfolio'
		>
			{
				works.map((work, index) => (
				<div className="portfolio-item app__flex" key={index}>
					<Image work={work}/>
					<div className="content app__flex">
						<h4 className="bold-text">
							{work.title}
						</h4>
						<p 
							className="p-text" 
							style={{ marginTop: 10 }}
						>
							{work.description}
						</p>
						<div className="stack app__flex">
							<h4 className="bold-text">
								Stack
							</h4>
							<div className="stack-items p-text">
								{
									work.stack.map((item, index) => (
										<div key={index}>{item}</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
				))
			}
		</motion.div>
		</>
	);
};

export default AppWrap(
  MotionWrap(Work, 'works'),
  'work',
  'app__primarybg',
);
