// * react
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

// * styles
import './Navbar.scss';

const navLinks = ['home', 'skills', 'work']

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				Bogdan
			</div>
			<ul className="app__navbar-links">
				{
					navLinks.map((item) => (
						<li className="app__flex p-text" key={`link-${item}`}>
							<a href={`#${item}`}>{item}</a>
						</li>
					))
				}
			</ul>

			<div className="app__navbar-menu">
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{
					toggle 
					&& (
						<motion.div
							whileInView={{ x: [300, 0] }}
							transition={{ duration: 0.85, ease: 'easeOut' }}
						>
							<HiX onClick={() => setToggle(false)} />
							<ul>
							{navLinks.map((item) => (
								<li key={item}>
								<a href={`#${item}`} onClick={() => setToggle(false)}>
									{item}
								</a>
								</li>
							))}
							</ul>
						</motion.div>
					)
				}
			</div>
		</nav>
	);
};

export default Navbar;