import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';



export default function Title({title, withShadows = false, styles}) {

	const MyTitle = styled('h1')(({theme}) => ({
		color: theme.palette.secondary.main,
		textTransform: 'uppercase',
		fontSize: '60px',
		textAlign: 'center',
		textShadow: withShadows ? `-4px 2px ${theme.palette.common.white}, -8px 4px ${theme.palette.common.black}` : '',
		height: 'fit-content',
		...styles
	}));
  return <MyTitle aria-label={title}>{title}</MyTitle>;
}

Title.propTypes = {
  title: PropTypes.string,
  withShadows: PropTypes.bool,
	styles: PropTypes.object
};
