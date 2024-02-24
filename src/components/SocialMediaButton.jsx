import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

export default function SocialMediaButton({media, link, styles}) {
	let socialMediaBackground = '';
	let icon = '';
	if(media === 'facebook') {
		socialMediaBackground = '#3b5999';
		icon = 'fa-facebook-f';
	} else if(media === 'codepen') {
		socialMediaBackground = '#fff';
		icon = 'fa-codepen';
	} else if(media === 'linkedin') {
		socialMediaBackground = '#0077b5';
		icon = 'fa-linkedin-in';
	} else if(media === 'github') {
		socialMediaBackground = '#000000';
		icon = 'fa-github';
	}
	const MySocialMediaButton = styled('a')(({theme}) => ({
		background: theme.palette.common.white,
		width: '30px',
		height: '30px',
		lineHeight: '30px',
		borderRadius:'50%',
		display: 'block',
		position: 'relative',
		overflow: 'hidden',
		textAlign:'center',
		border: `3px solid ${theme.palette.common.white}`,
		fontSize: '20px',
		margin: '0 10px',
		zIndex: 1,
		'.icon': {
			position: 'relative',
			color: theme.palette.common.black,
			transition: '.5s',
			zIndex: 3
		},
		'&:before': {
			content: '""',
			position: 'absolute',
			top: '100%',
			left: 0,
			width: '100%',
			height: '100%',
			transition: '.5s',
			zIndex: 2,
			background: socialMediaBackground
		},
		'&:hover': {
			'.icon': {
				color: (socialMediaBackground === theme.palette.common.white) ? theme.palette.common.black : theme.palette.common.white,	
				transform: 'rotateY(360deg)'
			},
			'&:before': {
				top: 0
			}
		},
		...styles
	}));

	return <MySocialMediaButton href={link} target="_blank">
		<i className={`fab ${icon} icon`} />
	</MySocialMediaButton>;
}

SocialMediaButton.propTypes = {
  media: PropTypes.string,
  link: PropTypes.string,
  styles: PropTypes.object
};
