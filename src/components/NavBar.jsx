import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
export default function NavBar({linkDirection = 'column', children, styles}) {

	const MyNavBar = styled('nav')(() => ({
		width: 'fit-content',
		'ul': {
			display: 'flex',
			flexDirection: linkDirection,
			listStyle: 'none',
			padding: 0
		},
		'li':{
			width: '100%',
		},
		...styles
	}));

    return <MyNavBar>
			{children}
		</MyNavBar>;
}

NavBar.propTypes = {
	linkDirection: PropTypes.string,
	styles: PropTypes.object,
	children:PropTypes.any
};
