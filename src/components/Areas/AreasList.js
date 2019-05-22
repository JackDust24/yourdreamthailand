/*
This component is for displaying the different places in Thailand
    it is called by the Areas page.
*/

import React, { Component } from 'react';
import AREAS from '../../data/areas';
import serialize from 'serialize-javascript';
import { removeXSSAttacks } from '../../static/helpers';


// These are the child elements to the Areas
class AreasList extends Component {

  // State - Get the areas to pop up
  state = { displayArea: false };

  // Toggle the display area  
  toggleDisplayArea = () => {
    this.setState({ displayArea: !this.state.displayArea });
  }

  render() {

    // For making this more secure when we extract HTML tags from data
    const secureInitialState = serialize(AREAS);

    // Parsing the JSON string to an actual object...
    const AREAITEMS = JSON.parse(secureInitialState);

    // This is called for each area from the mapping below
    const Area = (props) => {

      const { location, anchor, title, image, description, link, info, imageInfo } = props.area;

        return (
          // The href is the anchor
            <div className="AreaItem" style={{textAlign: 'center', alignSelf: 'stretch'}}>
              <a href={`#${anchor}`}></a> 
              <h3>{location}</h3>
              <h3>{title}</h3>
              <img src={image} alt={title} style={{ width: 500, height: 320 }} />
              <p dangerouslySetInnerHTML={removeXSSAttacks(imageInfo)} id='areaImageAttribute' />
              <p>{description}</p>
              {link != null
                ? <a href={link}>Wiki link</a>
                : <span> </span>
              }  
              {
                this.state.displayArea ? (
                  <div>
                    <p dangerouslySetInnerHTML={removeXSSAttacks(info)}/>
                    <button onClick={this.toggleDisplayArea}>Show less</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={this.toggleDisplayArea}>Read more</button>
                  </div>
                )
              } 
              <hr />		
            </div>
        )
    }

    // We map through the Area Items for each item
    return (
      <div>
        <div>
          {
            AREAITEMS.map(AREA => (
            <Area key={AREA.id} area={AREA} />
            ))
          }
        </div>
      </div>
    )
  }
}


export default AreasList;
