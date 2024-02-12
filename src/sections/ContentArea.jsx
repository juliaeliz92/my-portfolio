import * as React from 'react';
import { styled } from '@mui/system';

const MyComponent = styled('main')({
  width: '50vw'
});

export default function ContentArea() {
  return <MyComponent>Styled div</MyComponent>;
}