import * as React from 'react';
import { styled } from '@mui/system';


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
    width: '50vw',
    height: '100vh',
    '&:hover': {
      backgroundImage: `radial-gradient(200px at ${coordX}px ${coordY}px, ${theme.palette.primary.light}, ${theme.palette.primary.main})`
    }
  }))
  return <MyComponent 
      coordX={coordX}
      coordY={coordY}
    >
      Styled div
    </MyComponent>;
}