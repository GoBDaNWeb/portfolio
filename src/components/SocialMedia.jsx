// * react 
import React from 'react';

// * icons
import { BsGithub } from 'react-icons/bs';
import { FaTelegramPlane, FaVk } from 'react-icons/fa';

const SocialMedia = () => (
	<div className="app__social">
		<a
			href='https://t.me/Gobdan1'
			target={'_blank'}
		>
			<FaTelegramPlane />
		</a>
		<a
			href='https://vk.com/bogduc'
			target={'_blank'}
		>
			<FaVk />
		</a>
		<a
			href='https://github.com/GoBDaNWeb'
			target={'_blank'}
		>
			<BsGithub />
		</a>
	</div>
);

export default SocialMedia;
