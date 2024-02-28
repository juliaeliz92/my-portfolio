import * as React from 'react';
import PropTypes from 'prop-types';
// import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import TechPill from '.';

export default function TechPillsContainer({techStack}) {
    return <Stack direction={"row"} spacing={1} useFlexGap flexWrap="wrap">
        {techStack.map((tech, ind) => <TechPill key={ind} tech={tech} />)}
    </Stack>
}

TechPillsContainer.propTypes = {
    techStack: PropTypes.array
}