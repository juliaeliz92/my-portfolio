import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';

const NavLinks = React.forwardRef(function navLinks ({links, linkStyles}, ref) {
    const MyNavLink = styled('a')(({theme}) => ({
        textTransform: 'capitalize',
        textDecoration: 'none',
        padding: '5px',
        display: 'block',
        boxSizing: 'border-box',
        color: theme.palette.common.white,
        borderLeft: `5px solid ${theme.palette.secondary.main}`,
        position: 'relative',
        zIndex: 1,
        transition: theme.transitions.create(['all'], {duration: 300, easing:theme.transitions.easing.easeInOut}),
        '&:after': { 
            content: '""',
            height: '100%',
            left: 0,
            top: 0,
            width: 0,
            position: 'absolute', 
            transition: theme.transitions.create(['all'], {duration: 300, easing:theme.transitions.easing.easeInOut}) ,
            zIndex: -1,
            backgroundColor: theme.palette.secondary.main,
        },
        '&:hover, &.active': {
            '&:after': {
                width: '100%'
            },
            color: theme.palette.common.black,
        },
    }));

    return <ul style={linkStyles} ref={ref} aria-label='content link'>
        {links.map(link => (
            <li key={link}>
                <MyNavLink href={`#${link}`}>{link}</MyNavLink>
            </li>
        ))}
    </ul>
});

NavLinks.propTypes = {
    links: PropTypes.array,
    linkStyles: PropTypes.object
}

export default NavLinks;