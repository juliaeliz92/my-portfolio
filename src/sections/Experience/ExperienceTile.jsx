import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { TechPillsContainer } from '../../components';

export default function ExperienceTile({experience}) {
    const Tile = styled('section')(({ theme }) => ({
        padding: '10px',
        '.head': {
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            color: theme.palette.secondary.main,
            marginBottom: '5px',
            '.title-company': {
                fontSize: '20px',
                fontWeight: '600',
            }
        },
        '.sub-head': {
            marginBottom: '5px'
        },
        '.accomplishments': {
            fontSize: '16px',
            marginBottom: '10px'
        },
        '&:hover': {
            boxShadow: `${theme.palette.secondary.main} 0px 1px 2px 0px, ${theme.palette.secondary.main} 0px 1px 3px 1px`
        }
    }))

    return <Tile className='experience-tile'>
        <div className='head'>
            <span className='title-company'>{experience.jobTitle} • {experience.company}</span>
            <span>{experience.startDate} - {experience.endDate}</span>
        </div>
        <div className='sub-head'>
            <span>{experience.location} • {experience.type}</span>
        </div>
        <div className='accomplishments'>
            {experience.accomplishments}
        </div>
        <TechPillsContainer techStack={experience.technologies} />
    </Tile>
}

ExperienceTile.propTypes = {
    experience: PropTypes.object
}

