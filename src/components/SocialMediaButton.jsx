import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

export default function SocialMediaButton({children, styles}) {
  const MyParagraph = styled('a')(({theme}) => ({
    color: theme.palette.common.black,
    background: theme.palette.common.white,
    ...styles
  }));
  return <MyParagraph >{children}</MyParagraph>;
}

SocialMediaButton.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.object,
  styles: PropTypes.object
};
