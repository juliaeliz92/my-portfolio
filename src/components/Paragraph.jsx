import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

export default function Paragraph({children, textAlign, styles}) {
  const MyParagraph = styled('p')(({theme}) => ({
    color: theme.palette.common.white,
    textAlign,
    ...styles
  }));
  return <MyParagraph aria-label='job title description'>{children}</MyParagraph>;
}

Paragraph.propTypes = {
  children: PropTypes.any,
  textAlign: PropTypes.string,
  styles: PropTypes.object
};
