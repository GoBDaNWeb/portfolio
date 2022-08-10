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
					<div 
						className="image app__flex"
					>
						<img 
							src={work.image.url} 
							alt={work.title} 
						/>
						<motion.div
							whileHover={{ opacity: [0, 1] }}
							transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
							className="hover app__flex"
						>
							<a 
								href={work.liveLink} 
								target="_blank" 
								rel="noreferrer"
							>

								<motion.div
									whileInView={{ scale: [0, 1] }}
									whileHover={{ scale: [1, 0.90] }}
									transition={{ duration: 0.25 }}
									className="app__flex"
								>
									<AiFillEye />
								</motion.div>
							</a>
							{
								work.fullstack
								? (
									<>
										<a 
											href={work.frontLink} 
											target="_blank" 
											rel="noreferrer"
										>
											<motion.div
												whileInView={{ scale: [0, 1] }}
												whileHover={{ scale: [1, 0.90] }}
												transition={{ duration: 0.25 }}
												className="app__flex"
											>
												<AiFillGithub />
											</motion.div>
										</a>
										<a 
											href={work.backLink} 
											target="_blank" 
											rel="noreferrer"
										>
											<motion.div
												whileInView={{ scale: [0, 1] }}
												whileHover={{ scale: [1, 0.90] }}
												transition={{ duration: 0.25 }}
												className="app__flex"
											>
												<AiFillGithub />
											</motion.div>
										</a>
									</>
								) : (
									<a 
										href={work.frontLink} 
										target="_blank" 
										rel="noreferrer"
									>
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.90] }}
											transition={{ duration: 0.25 }}
											className="app__flex"
										>
											<AiFillGithub />
										</motion.div>
									</a>
								)
							}
						</motion.div>
					</div>
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
