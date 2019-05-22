import React, { Component } from 'react';
// import ReactDOM, { Link } from 'react-dom';
import Footer from '../layout/Footer';

import '../App.css';
import Advert from '../Shared/Advert';

const advertPloyTour = {

    image: require("../../assets/ployTour.jpg"),
    title: "Bangkok Photography Tour",
    info: "Join a local photographer and create the best holiday imaginable with your own magnificent photos from the most inspiring locations all over Bangkok.",
    link: "/assets/Bangkok-Photo-Tour.pdf",
    pdfLink: true,
}

class Tours extends Component {

    componentDidMount() {
        console.log("component did mount");
        window.scrollTo(0, 0);
      }


    render() {

        console.log("TEST - " + advertPloyTour.title);

        return(  
            <div className="Tours">
                <div className="banner" id="banner-tours">
                    <br />
                    <br />
                    <div className="banner-tours-text">
                        <h1>Tours</h1>
                        <h3>
                        Find Hiking, Photography, Hill Tribe Tours and more
                        </h3>
                        <p id="photo-thanks">
                        Photo by <a href="https://unsplash.com/@robinnoguier">Robin Noguier</a> on <a href="https://unsplash.com/">Unsplash</a>
                        </p>
                    </div>
                </div>
                <div className="tours-area">
                    <div className="tours-area-top" style={{ textAlign: 'left' }}>

                        <div className="tours-area-banner-ad" style={{ display: 'inline-block', flexGrow: 1, width: 420, margin: 10, marginTop: 30 }}>
                            <Advert advert={advertPloyTour}/>
                            {/* <img src={require("/assets/180Samui.jpg")} className="image" alt='180Samui' style={{ width: 400, height: 120 }} /> */}
                        </div>
                        <div className="tours-area-header" style={{ display: 'inline-block', verticalAlign: 'top', flexGrow: 1, margin: 10, width: 420, textAlign: 'center', paddingLeft: 20,  marginTop: 30 }}>
                            <h1>Thailand Tours</h1>
                                <p>Choose the tours you wish to find in Thailand</p>
                                <p><strong>This page will be updated shortly</strong></p>
                                <br />
                                {/* <AreasList /> */}
                        </div>
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        )
    }
}

export default Tours;