import * as React from 'react';
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';

const ContentArea = ({ setMainRef }) => {
	const mainRef = React.useRef(null);
	const MyComponent = styled('main')({
		padding: '8%',
		fontSize: '18px',
		height: '100%'
	});
	const handleMainRef = React.useCallback((el) => {
		if(el && el !== null){
			mainRef.current = el; 
			setMainRef(mainRef);
		}
	}, [setMainRef, mainRef]);

	return <MyComponent ref={(el) => handleMainRef(el)} aria-roledescription='grid-column' aria-label='area with content'>
		<AboutMe/>
		<Experience />
		<Projects />
	</MyComponent>;
}

ContentArea.propTypes = {
	setMainRef: PropTypes.func
}

export default ContentArea;