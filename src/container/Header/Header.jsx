// * react
import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

// * styles
import './Header.scss';

const scaleVariants = {
    whileInView: {
      	scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: 'easeInOut',
		},
    },
};

const headerImages = [images.react, images.redux, images.sass]

const Header = () => (
	<div className="header app__flex">
		<motion.div
			whileInView={{ x: [-100, 0], opacity: [0, 1] }}
			transition={{ duration: 0.5 }}
			className="header-info"
		>
			<div className="header-badge">
				<div className="badge-cmp app__flex">
					<span>👋</span>
					<div style={{ marginLeft: 20 }}>
						<p className="p-text">Привет, я</p>
						<h1 className="head-text">Богдан</h1>
					</div>
				</div>

				<div className="tag-cmp app__flex">
					<p className="p-text">
						Frontend Developer
					</p>
				</div>
			</div>
		</motion.div>

		<motion.div
			whileInView={{ opacity: [0, 1] }}
			transition={{ duration: 0.5, delayChildren: 0.5 }}
			className="header-img"
		>
		<motion.img
			whileInView={{ scale: [0, 1] }}
			transition={{ duration: 1, ease: 'easeInOut' }}
			src={images.circle}
			alt="profile_circle"
			className="overlay_circle"
		/>
		</motion.div>

		<motion.div
			variants={scaleVariants}
			whileInView={scaleVariants.whileInView}
			className="header-circles"
		>
			{
				headerImages.map((circle, index) => (
					<div 
						className="circle-cmp app__flex" 
						key={`circle-${index}`}
					>
						<img 
							src={circle} 
							alt="profile_bg" 
						/>
					</div>
				))
			}
		</motion.div>
	</div>
);

export default AppWrap(Header, 'home');
