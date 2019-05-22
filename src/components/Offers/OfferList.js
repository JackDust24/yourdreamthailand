import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Popup from 'react-popup';
import '../Shared/Popup.css';
import '../App.css';

class OfferList extends Component {

    constructor(props) {
        super(props);
  
        this.state = {
          showingResult: null,
          viewItem: false,
        //   isLoading: false,
        }
    }

    offerResult = (e, item) => {

        e.preventDefault();
        this.showPopUp(item);
    }

    showPopUp = (item) => {

        const { type, title, subtitle, link, description, image } = item;

        Popup.create({
            title: `${title}`,
            content: (

            <div className="listings" style={{ display: 'inline-block', width: 320, margin: 10}}>
                 <div className="listings_text">
                    <h3> {type}</h3>
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
                    <img src={image} alt='profile' style={{ width: 300, height: 120 }} />
                    <p>{description}</p>
                </div>
                <div className="listings_link">
                    <a href={link}>{link}</a>
                </div>
            </div>
            ),
            buttons: {
              right: [{
                text: 'Close',
                action: popup => popup.close()
              }],
            },
          });

    }

  render() {

    const contentResults = this.props.contentResults;

    if (contentResults) {
        console.log("There are props");

    } else {
        console.log("There are NO props");
        return null;

    }

    //TODO - Delete?
    let resultListBlock = '';

    return (

        <div className="otherResults">
            <Carousel>
            { resultListBlock = Object.keys(contentResults).map(item => 
                <div key={contentResults[item]._id}>
                    <img src={contentResults[item].image} className="image" alt={contentResults[item].title}/>
                    <p className="legend">{contentResults[item].title}</p>
                    <button className="legend2"
                    value={item}
                    onClick={ e => this.offerResult(e, contentResults[item]) }  >
                    Read More </button>
                </div>
            )}
            </Carousel>
        </div>
    )
  }
}

export default OfferList;
