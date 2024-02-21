import * as React from 'react';
import { styled } from '@mui/system';
import { Title, Subtitle, Paragraph, NavBar, SocialMediaButton } from './../components';
import * as constants from './../utilities/constants'
// import * as eventHelper from './../utilities/eventHandlers';

const ScrollArea = () => {
	const [coordX, setCoordX] = React.useState(0);
	const [coordY, setCoordY] = React.useState(0);
	const scrollAreaRef = React.useRef(null);

	const onMouseMove = React.useCallback((e) => {
		e.preventDefault();
		setCoordX(e.clientX);
		setCoordY(e.clientY);
	}, []);

	const SpotLight = styled('div')(({theme}) => ({
		backgroundImage: `radial-gradient(200px at ${coordX}px ${coordY}px, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
		position: 'fixed',
		pointerEvents: 'none',
		width: '50%',
		height: '100%',
		zIndex: -1
	}));

	const MyComponent = styled('section')(() => ({
		height: '100vh',
		display:'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 150px',
	}))

	return <MyComponent ref={scrollAreaRef} onMouseOver={e => {
			e.preventDefault();
			onMouseMove(e);
		}}>
		<SpotLight />
		<Title 
		withShadows
		title={constants.my_name}
		styles={{margin: 0}}
		/>
		<Subtitle 
		text={constants.designation} 
		styles={{margin: '5px'}}
		/>
		<Paragraph
		textAlign={'justify'}
		>
		{constants.description}
		</Paragraph>
		<NavBar links={constants.nav_links} />
		<SocialMediaButton />
	</MyComponent>;
};

export default ScrollArea;