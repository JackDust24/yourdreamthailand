import React from 'react';
import AREAS from '../../data/areas';
import { Link } from 'react-router-dom';


// So we have child elements to the Areas
const AreaThumbs = props => {

	const { anchor, title, image, description, link } = props.area;

	return (
		<div style={{ display: 'inline-block', width: 300, margin: 10}}>
      		<h3>{title}</h3>
      		<img src={image} alt='profile' style={{ width: 200, height: 120 }} />
     		<p>{description}</p>
				 {link != null
            // ? <a href="#" onClick={()=> window.open(`${<Link to='/Areas' />}`, "_blank")}>Read More</a>
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