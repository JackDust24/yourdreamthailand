import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import INFORMATIONDATA from '../../data/informationdata';

const bkgColours = {
    default: {
        colour: '#c5e1f5',
    },
    other: {
        colour: '#aed7f4',
    },

}

let bkgColour = bkgColours.default;

class InformationList extends Component {

  toggleDefaultBackgroundColour = () => {

    if (bkgColour !== bkgColours.default) {
        bkgColour = bkgColours.default
    } else {
        bkgColour = bkgColours.other

    }

}

  render() {

    const Information = (props) => {

        this.toggleDefaultBackgroundColour();

        const { anchor, title, image, description, links, info } = props.information;

        return (
            <div className="informationItem" style={{textAlign: 'center', alignSelf: 'stretch', backgroundColor: bkgColour.colour}}>
                <a name={anchor}></a> 
                  <h1>{title}</h1>
                  <br />
                  <span>
                  <h3>
                  {description}
                  </h3>

                  <img src={image} alt='profile' style={{ width: 500, height: 320}} />
                 </span>
                <div>
                    <div className="informationItem-info" style={{textAlign: 'justify', alignSelf: 'justify'}}>
                        <p>{info}</p>          
                        {links.map(item =>
                            <div key={uuidv4()}>
                                <span>
                                    <p>{item.description}</p>
                                </span>
                                <span>
                                    <a href={item.URL}>{item.URL}</a>
                                </span>
                                <hr />
                            </div>)
                        }
                    </div>
                </div>
                <hr />	         
            </div>
        )
    }

    return (
        <div>
            <div>
            {
                INFORMATIONDATA.map(INFORMATION => (
                <Information key={INFORMATION.id} information={INFORMATION} />
                ))
            }
            </div>
        </div>
    )
  }
}


export default InformationList;
