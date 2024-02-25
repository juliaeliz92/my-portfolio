import * as React from 'react';
import { Hidden } from '@mui/material';
import { styled } from '@mui/system';
import { 
	Title, 
	Subtitle, 
	Paragraph, 
	NavBar, 
	SocialMediaList,
	SocialMediaButton, 
	NavLinks 
} from './../components';
import * as constants from './../utilities/constants';	

const ScrollArea = () => {

	const MyComponent = styled('section')(({ theme }) => ({
		height: '100vh',
		display:'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 20%',
		backgroundColor: theme.palette.primary.main,
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
		<Hidden mdDown>
			<NavBar>
				<NavLinks links={constants.nav_links} />
			</NavBar>
		</Hidden>
		<NavBar linkDirection='row'>
			<SocialMediaList list={constants.social_media_links}>
				<SocialMediaButton />
			</SocialMediaList>
		</NavBar>
	</MyComponent>;
};

export default ScrollArea;