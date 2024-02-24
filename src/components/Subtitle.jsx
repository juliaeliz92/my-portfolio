import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';



export default function Subtitle({text, styles}) {
  const MySubtitle = styled('h2')(({theme}) => ({
    color: theme.palette.secondary.light,
    width: 'fit-content',
    textAlign: 'center',
    ...styles
  }));
  return <MySubtitle>{text}</MySubtitle>;
}

Subtitle.propTypes = {
  text: PropTypes.string,
  styles: PropTypes.object
};
