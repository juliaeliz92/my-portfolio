import * as React from 'react';
import { styled } from '@mui/system';
import { Title, Subtitle, Paragraph, NavBar, SocialMediaButton } from './../components';
import * as constants from './../utilities/constants'	

const ScrollArea = () => {

	const MyComponent = styled('section')(({ theme }) => ({
		height: '100vh',
		display:'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 150px',
		backgroundColor: theme.palette.primary.main
	}))

	return <MyComponent>
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