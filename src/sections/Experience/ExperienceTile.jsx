import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { TechPillsContainer } from '../../components';

export default function ExperienceTile({experience}) {
    const Tile = styled('section')(({ theme }) => ({
        padding: '10px',
        marginBottom: '20px',
        boxShadow: `${theme.palette.secondary.main} 0px 1px 2px 0px, ${theme.palette.secondary.main} 0px 1px 3px 1px`,
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
            color: theme.palette.secondary.main,
            marginBottom: '5px',
            '.title-company, a': {
                fontSize: '20px',
                fontWeight: '600',
                textDecoration: 'none',
                color: 'inherit',
                'i': {
                    fontSize: '18px',
                    marginLeft: '2px'
                }
            },
            'a:hover' : {
                textDecoration: 'underline'
            }
        },
        '.sub-head': {
            marginBottom: '5px'
        },
        '.accomplishments': {
            fontSize: '16px',
            marginBottom: '10px'
        },
    }))

    return <Tile aria-label='experience'>
        <header>
            <span className='title-company' aria-label='job title and company'>
                {experience.jobTitle} • 
                <a href={experience.link} target='_blank' rel='noreferrer'>
                    {experience.company}
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </span>
            <span aria-label='start and end date'>{experience.startDate} - {experience.endDate}</span>
        </header>
        <div className='sub-head' aria-label='job location and type'>
            <span>{experience.location} • {experience.type}</span>
        </div>
        <div className='accomplishments' aria-label='job accomplishments'>
            {experience.accomplishments}
        </div>
        <TechPillsContainer techStack={experience.technologies} />
    </Tile>
}

ExperienceTile.propTypes = {
    experience: PropTypes.object
}

