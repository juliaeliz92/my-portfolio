import * as React from 'react';
import { styled } from '@mui/system';
import * as constants from './../utilities/constants';

const MyAboutMe = styled('section')({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
})

export default function AboutMe() {
    return <MyAboutMe id="about">{constants.about_me.map((about, ind) => 
        (<p key={ind}>{about}</p>)
    )}</MyAboutMe>
}