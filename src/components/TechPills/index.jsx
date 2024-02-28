import * as React from 'react';
import PropTypes from 'prop-types';
// import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';

export default function TechPill({tech}) {
    return <Chip 
        label={tech} 
        variant="outlined" 
        color='primary'
    />
}

TechPill.propTypes = {
    tech: PropTypes.string
}