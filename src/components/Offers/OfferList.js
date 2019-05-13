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


    handleSubmitButton = () => {
        console.log('Offer Selected: ' + this.state.selectedOffer);

    }

    offerResult = (e, item) => {

        e.preventDefault();

        console.log(item);

        this.showPopUp(item);
    }

    showPopUp = (item) => {

        console.log("Show popup");

        console.log(item);


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

    // const {
    //     // isLoading,
    //     showingResult,
    //     viewItem
    // } = this.state;

    console.log(contentResults);

    if (contentResults) {
        console.log("There are props");

    } else {
        console.log("There are NO props");
        return null;

    }

    let resultListBlock = '';
    console.log("PROPS");

    return (
        // onClick={ (<OfferResult offerResult={item} />) }  >

        <div className="otherResults">
            <Carousel>

            { resultListBlock = Object.keys(contentResults).map(item => 
                <div key={contentResults[item]._id}>
                    <img src={contentResults[item].image} className="image" alt={contentResults[item].title}/>
                    <p className="legend">{contentResults[item].title}</p>
                    {/* <p> Offer</p> */}
    
                    {/* <p />
                    <p />
                    <p /> */}
                    {/* <a className="legend2" href={contentResults[item].link}>Click Here</a> */}
                    <button className="legend2"
                    value={item}
                    // isLoading={isLoading}
                    onClick={ e => this.offerResult(e, contentResults[item]) }  >
                    Read More </button>

                </div>
            )}
            </Carousel>
        </div>




    )

  }
}

// const ItemDetails = ({
//     item
// }) => {
//         const { type, title, subtitle, link, description, image } = item;

//         return (
//             <div className="listings" style={{ display: 'inline-block', width: 320, margin: 10}}>
//                 <div className="listings_text">
//                     <h3> {type}</h3>
//                     <h4>{title}</h4>
//                     <h5>{subtitle}</h5>
//                     <img src={image} alt='profile' style={{ width: 300, height: 120 }} />
//                     <p>{description}</p>
//                 </div>
//                 <div className="listings_link">
                
//                     {/* <a href={link}>{link}</a> */}
//                     <a href="#" onClick={()=> window.open(`${link}`, "_blank")}>{link}</a>
//                 </div>
//             </div>
//         );
//     }


export default OfferList;
