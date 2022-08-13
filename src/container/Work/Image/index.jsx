// * react
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


// * icons
import { AiFillEye, AiFillGithub } from 'react-icons/ai';

// * styles
import './Image.scss';

const Image = ({work}) => {
    return (
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
                        className="link app__flex"
                    >
                        <AiFillEye />
                    </motion.div>
                </a>
                {
                    work.fullstack
                    ? (
                        <div className='fullstack'>
                            <a 
                                href={work.frontLink} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    whileHover={{ scale: [1, 1.1] }}
                                    transition={{ duration: 0.25 }}
                                    className="link link-front app__flex"
                                >
                                    <AiFillGithub className='icon'/>
                                    <div className='frontendHint'>
                                        Frontend
                                    </div>
                                </motion.div>
                            </a>
                            <a 
                                href={work.backLink} 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    whileHover={{ scale: [1, 1.1] }}
                                    transition={{ duration: 0.25 }}
                                    className="link link-back app__flex"
                                >
                                    <div className='backendHint'>
                                        Backend
                                    </div>
                                    <AiFillGithub className='icon'/>
                                </motion.div>
                            </a>
                        </div>
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
                                className="link app__flex"
                            >
                                <AiFillGithub />
                            </motion.div>
                        </a>
                    )
                }
            </motion.div>
        </div>
    )
}

export default Image