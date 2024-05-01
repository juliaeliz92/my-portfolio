import * as React from 'react';
import { styled } from '@mui/system';
import ProjectTile from './ProjectTile';
import * as constants from './../../utilities/constants';

export default function Projects() {
    const MyProjects = styled('section')({
        marginBottom: '100px',
        height: '100vh',
        padding: 30,
        display: 'flex',
        alignContent: 'center',
        flexWrap: 'wrap'
    })
    return <MyProjects id='projects' aria-label='list of projects'>
        {constants.projects.map((project, ind) => <ProjectTile key={ind} project={project} />)}
    </MyProjects>
}
