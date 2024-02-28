import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import SocialMediaButton from './SocialMediaButton';

export default function SocialMediaList({list, styles}) {

	const MySocialMediaList = styled('ul')(() => ({
		...styles
	}));

	return <MySocialMediaList>
        {list.map((media, index) => <li key={index}><SocialMediaButton media={media.media} link={media.link}/></li>)}
    </MySocialMediaList>
}

SocialMediaList.propTypes = {
  list: PropTypes.array,
  styles: PropTypes.object
};
