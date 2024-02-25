import * as React from 'react';
import { styled } from '@mui/system';
import AboutMe from './AboutMe';
import Experience from './Experience';

const MyComponent = styled('main')({
	padding: '8%',
	fontSize: '18px',
	height: '100%'
});

export default function ContentArea() {
	return <MyComponent>
		<AboutMe/>
		<Experience />
	</MyComponent>;
}