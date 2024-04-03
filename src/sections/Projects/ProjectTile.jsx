import * as React from 'react';
import { styled } from '@mui/system';
import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import { TechPillsContainer } from '../../components';

export default function ProjectTile({project}) {
    const MyProject = styled('article')(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        height: 'fit-content',
        marginBottom: '20px',
        boxShadow: `${theme.palette.secondary.main} 0px 1px 2px 0px, ${theme.palette.secondary.main} 0px 1px 3px 1px`,
        '.content-container': {
            display: 'flex',
            a: {
                fontSize: '20px',
                fontWeight: '600',
                textDecoration: 'none',
                color: theme.palette.secondary.main,
            },
            marginBottom: '10px'
        },
        '.project-content': {
            'p, span': {
                fontSize: '16px'
            }
        },
        '.tech-pills-container': {
            display: 'flex',
            width: '100%',
            justifyContent: 'center'
        },
    }))
    return <MyProject aria-label='project'>

        <Grid className='content-container' container>
            <Grid sx={12} md={6}>
                <div>
                    <img src={project.thumbnail} alt='project thumbnail goes here' width={200} />
                </div>
            </Grid> 
             <Grid sx={12} md={6}>
                <div className='project-content'>
                    <a href={project.link}>{project.title} <i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                    <p>{project.description}</p>
                    <span>Published on {project.publishDate}</span>
                </div>
            </Grid>
        </Grid>
        <div className='tech-pills-container'>
            <TechPillsContainer techStack={project.technologies} />
        </div>
    </MyProject>
}

ProjectTile.propTypes = {
    project : PropTypes.object
}