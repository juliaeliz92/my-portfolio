import * as React from 'react';
import { Grid } from '@mui/material';
import { ScrollArea, ContentArea } from './sections';
import { SpotLightCursor } from './components';
import * as eventHelpers from './utilities/eventHelpers';

function App() {
	const [navLinkRef, setNavLinkRef] = React.useState();
	const [mainRef, setMainRef] = React.useState();
	const scrollAreaRef = React.useRef();
	const handleNavLinkRef = (navLinkRef) => {
		setNavLinkRef(navLinkRef);
	};	
	const handleMainRef = (mainRef) => {
		setMainRef(mainRef);
	}
	React.useEffect(() => {
		let scrollAreaCurrentRef = scrollAreaRef?.current;
		let mainAreaCurrentRef = mainRef?.current;
		let navLinkCurrentRef = navLinkRef?.current
;		if(mainAreaCurrentRef && mainAreaCurrentRef !== null && navLinkCurrentRef && navLinkCurrentRef !== null) {
			scrollAreaCurrentRef.addEventListener("scroll", () => eventHelpers.setScrollLinkActive(mainAreaCurrentRef, navLinkCurrentRef, scrollAreaCurrentRef));
			return () => {
				scrollAreaCurrentRef.removeEventListener('scroll', () => eventHelpers.setScrollLinkActive(mainAreaCurrentRef, navLinkCurrentRef, scrollAreaCurrentRef))
			}
		}
	}, [mainRef, navLinkRef])

	return (
		<>
			<SpotLightCursor navLinkRef={navLinkRef} mainRef={mainRef} />
			<Grid container>
				<Grid item xs={12} md={5} sx={{overflow: 'hidden'}}>
					<ScrollArea setNavLinkRef={handleNavLinkRef}/>
				</Grid>
				<Grid 
					item 
					xs={12} 
					md={7} 
					sx={{overflowY: {md: 'auto'}, height: {md: '100vh'}}}
					ref={el => scrollAreaRef.current = el}
				>
					<ContentArea setMainRef={handleMainRef} />
				</Grid> 
			</Grid>
		</>
	);
}

export default App;
