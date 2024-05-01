import * as React from 'react';
import { styled } from '@mui/system';
import * as constants from './../../utilities/constants';
import ExperienceTile from './ExperienceTile';

export default function Experience() {
    const ExperienceSection = styled('section')({
        marginBottom: '200px'
    })
    return <ExperienceSection id="experiences" aria-label='list of experience'>
        {constants.experiences.map((experience, ind) => <ExperienceTile experience={experience} key={ind} />)}
    </ExperienceSection>
}