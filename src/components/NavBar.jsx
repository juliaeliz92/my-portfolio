import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

export default function NavBar({links, styles, linkStyles}) {
	const MyNavBar = styled('nav')(() => ({
		display: 'flex',
		flexDirection: 'column',
		width: 'fit-content',
		...styles
	}));

	const NavLink = styled('a')(({theme}) => ({
		textTransform: 'capitalize',
		textDecoration: 'none',
		padding: '5px',
		color: theme.palette.common.white,
		borderLeft: `5px solid ${theme.palette.secondary.main}`,
		position: 'relative',
		zIndex: 2,
		width: '100%',
		'&:hover': {
			color: theme.palette.common.black,
			'&:after': {
				width: '100%'
			}
		},
		'&:after': { 
			content: '""',
			height: '100%',
			left: 0,
			top: 0,
			width: 0,
			position: 'absolute', 
			transition: 'all 0.5s ease 0s',
			zIndex: -1,
			backgroundColor: theme.palette.secondary.main,
		},
		...linkStyles
	}));

  return <MyNavBar>{links.map(link => (
			<NavLink key={link} href={`#${link}`}>
				{link}
			</NavLink>))}
		</MyNavBar>;
}

NavBar.propTypes = {
  links: PropTypes.array,
	styles: PropTypes.object,
	linkStyles: PropTypes.object
};
