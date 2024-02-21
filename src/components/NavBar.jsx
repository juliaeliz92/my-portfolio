import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
export default function NavBar({links, styles, linkStyles}) {

	const MyNavBar = styled('nav')(() => ({
		display: 'flex',
		flexDirection: 'column',
		width: 'fit-content',
		'ul': {
			listStyle: 'none',
			padding: 0
		},
		'li':{
			width: '100%',
		},
		...styles
	}));

	const MyNavLink = styled('a')(({theme}) => ({
		textTransform: 'capitalize',
		textDecoration: 'none',
		padding: '5px',
		display: 'block',
		boxSizing: 'border-box',
		color: theme.palette.common.white,
		borderLeft: `5px solid ${theme.palette.secondary.main}`,
		position: 'relative',
		zIndex: 1,
		transition: theme.transitions.create(['all'], {duration: 300, easing:theme.transitions.easing.easeInOut}),
		'&:after': { 
			content: '""',
			height: '100%',
			left: 0,
			top: 0,
			width: 0,
			position: 'absolute', 
			transition: theme.transitions.create(['all'], {duration: 300, easing:theme.transitions.easing.easeInOut}) ,
			zIndex: -1,
			backgroundColor: theme.palette.secondary.main,
		},
		'&:hover': {
			'&:after': {
				width: '100%'
			},
			color: theme.palette.common.black,
		},
		...linkStyles
	}));

	function NavLink({value}) {
		return <li>
			<MyNavLink 
				href={`#${value}`}
			>
				{value}
			</MyNavLink>
		</li>
	}

	NavLink.propTypes = {
		value: PropTypes.string,
	}

    return <MyNavBar 
			onMouseOverCapture={e => {
				e.stopPropagation();
			}}
			onMouseLeave={e => {		
				e.preventDefault();
				e.stopPropagation();
				console.log(e)
			}}
		>
			<ul>
			{links.map(link => (
				<NavLink value={link} key={link} />
			))}
			</ul>
		</MyNavBar>;
}

NavBar.propTypes = {
	links: PropTypes.array,
	styles: PropTypes.object,
	linkStyles: PropTypes.object,
};
