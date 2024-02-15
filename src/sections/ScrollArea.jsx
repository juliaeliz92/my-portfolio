import * as React from 'react';
import { styled } from '@mui/system';
import { Title, Subtitle, Paragraph, NavBar } from './../components';
import * as constants from './../utilities/constants'

export default function ScrollArea() {
  const [coordX, setCoordX] = React.useState(null);
  const [coordY, setCoordY] = React.useState(null);
  const onHover = (event) => {
    setCoordX(event.clientX);
    setCoordY(event.clientY);
  }

  React.useEffect(() => {
      window.addEventListener('mousemove', onHover);
      return () => window.removeEventListener('mousemove', onHover);
  })

  const MyComponent = styled('aside')(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 150px',
    '&:hover': {
      backgroundImage: `radial-gradient(200px at ${coordX}px ${coordY}px, ${theme.palette.primary.light}, ${theme.palette.primary.main})`
    }
  }))
  return <MyComponent 
      coordX={coordX}
      coordY={coordY}
    >
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
    </MyComponent>;
}