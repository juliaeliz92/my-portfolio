import * as React from 'react';
import PropTypes from 'prop-types';
import { Hidden } from '@mui/material';
import { styled } from '@mui/system';
import { 
	Title, 
	Subtitle, 
	Paragraph, 
	NavBar, 
	SocialMediaList,
	NavLinks 
} from './../components';
import * as constants from './../utilities/constants';	

const ScrollArea = ({setNavLinkRef}) => {
	const navLinkRef = React.useRef(null);

	const handleNavRef = React.useCallback((el) =>{
		if(el && el !== null) {
			navLinkRef.current = el; 
			setNavLinkRef(navLinkRef);
		}
	}, [navLinkRef, setNavLinkRef])
	
	const MyComponent = styled('section')(({ theme }) => ({
		height: '100vh',
		display:'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '0 20%',
		backgroundColor: theme.palette.primary.main,
	}))

	return <MyComponent aria-roledescription='grid-column' aria-label='area with links and headings'>
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
				<NavLinks ref={el => handleNavRef(el)} links={constants.nav_links} />
			</NavBar>
		</Hidden>
		<NavBar linkDirection='row'>
			<SocialMediaList list={constants.social_media_links} />
		</NavBar>
	</MyComponent>;
};

ScrollArea.propTypes = {
	setNavLinkRef: PropTypes.func
}

export default ScrollArea;