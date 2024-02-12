import * as React from 'react';
import { styled } from '@mui/system';

const MyComponent = styled('aside')(({theme}) => ({
  backgroundColor: theme.palette.primary.main,
  width: '50vw',
  height: '100vh',
}));

export default function ScrollArea() {
  return <MyComponent>Styled div</MyComponent>;
}