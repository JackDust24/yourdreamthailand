/*
This component is for displaying the different places in Thailand by thumbnails
    this is displayed on the landing page.
*/

import React from 'react';
import AREAS from '../../data/areas';
import { Link } from 'react-router-dom';

// This is for each Area which gets called from the AreasThumbs
const AreaThumbs = props => {

	const { anchor, title, image, description, link } = props.area;

	return (
		<div style={{ display: 'inline-block', width: 300, margin: 10}}>
			<h3>{title}</h3>
			<img src={image} alt='profile' style={{ width: 200, height: 120 }} />
			<p>{description}</p>
			{link != null
				? <Link key={anchor} to={`/Areas#${anchor}`} target="_blank" >Read More</Link>
				: <span> Find your paradise !!! </span>
			}      		
    </div>
		)
}

const AreasThumbs = () => (
	<div>
		<h2>Places in Thailand</h2>

		<div>
		   {
				AREAS.map(AREA => (
					<AreaThumbs key={AREA.id} area={AREA} />
				))
	      }
	    </div>
  </div>
)

export default AreasThumbs;