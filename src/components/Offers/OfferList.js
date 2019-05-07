import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import classNames from 'class-names';
import '../App.css';
import Popup from 'react-popup';
import '../Shared/Popup.css';

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

    const {
        // isLoading,
        showingResult,
        viewItem
    } = this.state;

    console.log("OffersOtherResults");
    console.log(contentResults);

    if (contentResults) {
        console.log("There are props");
        // const contentResults = this.props.contentResults;
        // console.log(contentResults);


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
                    <img src={contentResults[item].image} className="image" />
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
                        {/* <button
                            onClick={() => this.offerResult(contentResults[item])}>
                            More
                        </button> */}
                </div>
            )}
            </Carousel>

            {/* <div className='form-container'>
                {(this.state.viewItem) ?
                <ItemDetails item={this.state.showingResult} /> 
                : 'NOT'}
            </div>

            <div className='form-container2'>
                <p>HI</p>
            </div> */}


        </div>




    )


    // return (
    //     <Carousel>
    //         <div>
    //             <img src={require("/assets/beach1.jpg")} className="image" />
    //             <p className="legend">New Offer</p>
    //             {/* <p> Offer</p> */}

    //             {/* <p />
    //             <p />
    //             <p /> */}
    //             <a className="legend2" href="https://www.bbc.com/news/technology-46604625">Click Here</a>

    //         </div>
    //         <div>
    //             <img src={require("/assets/beach2.jpg")} />
    //             <p className="legend">New Offer 2</p>
    //             {/* <p>
    //             <a href="https://www.bbc.com/news/technology-46604625">Click Here</a>
    //             </p> */}
    //         </div>
    //         <div>
    //             <img src={require("/assets/beach3.jpg")} />
    //             <p className="legend">New Offer 3</p>
    //             {/* <p />
    //             <a href="https://www.bbc.com/news/technology-46604625">Click Here</a>
    //             <p /> */}
    //         </div>
    //     </Carousel>
    // );
  }
}

// const Button = ({
//     onClick,
//     className = '',
//     children,
//   }) =>
//     <button
//       onClick={onClick}
//       className={className}
//       type="button"
//     >
//       {children}
//     </button>

// const Loading = () =>
//   <div>Loading ...</div>

// const withLoading = (Component) => ({ isLoading, ...showingResult }) =>
//   isLoading
//     ? <Loading />
//     : <Component { ...showingResult } />

// const ButtonWithLoading = withLoading(Button);

const ItemDetails = ({
    item
}) => {
        const { type, title, subtitle, link, description, image } = item;

        return (
            <div className="listings" style={{ display: 'inline-block', width: 320, margin: 10}}>
                <div className="listings_text">
                    <h3> {type}</h3>
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
                    <img src={image} alt='profile' style={{ width: 300, height: 120 }} />
                    <p>{description}</p>
                </div>
                <div className="listings_link">
                
                    {/* <a href={link}>{link}</a> */}
                    <a href="#" onClick={()=> window.open(`${link}`, "_blank")}>{link}</a>
                </div>
            </div>
        );
    }

// //render(<RecommendedList />);

// export {
//     Button,
//   };

export default OfferList;
