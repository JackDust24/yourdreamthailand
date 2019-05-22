/*
This component is for displaying the Accomodation 
    we will get Agoda information for this.
*/

import React, { Component } from 'react';
import Advert from '../Shared/Advert';
import Footer from '../layout/Footer';
import '../App.css';

// This is for advertising 180 Samui
const advertSamui = {

    image: require("../../assets/180Samui.jpg"),
    title: "Luxurious stay in Samui",
    info: "180 Samui is a luxury villa in Koh Samui. Set on a secluded hilltop with a breathtaking panorama of coral coves, white sand beaches and small islands.",
    link: "http://180samui.com/",
    pdfLink: false,

}

class Accommodation extends Component {

    constructor(props) {
        super(props);
    
    }
    
    componentDidMount() {
        console.log("component did mount");
        window.scrollTo(0, 0);
      }

    render() {

        return(  
            <div className="Accommodation">
               <div className="banner" id="banner-accommodation">
                    <br />
                    <br />
                    <div className="banner-accommodation-text">
                        <h1>Accommodation</h1>
                        <h3>
                        Look for hotels, resorts, guesthouses etc 
                        </h3>
                        <p id="photo-thanks">
                        Photo by <a href="https://unsplash.com/photos/fzEOvcazEtI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Frankie Spontelli</a> on <a href="https://unsplash.com/">Unsplash</a>
                        </p>
                    </div>
                </div>
                <div className="accommodation-area">
                    <div className="accommodation-area-top" style={{ textAlign: 'left' }}>
                        <div className="accommodation-area-banner-ad" style={{ display: 'inline-block', flexGrow: 1, width: 420, margin: 10, marginTop: 30 }}>
                            <Advert advert={advertSamui}/>
                        </div>
                        <div className="accommodation-area-header" style={{ display: 'inline-block', verticalAlign: 'top', flexGrow: 1, margin: 10, width: 420, textAlign: 'center', paddingLeft: 20,  marginTop: 30 }}>
                            <h1>Accommodation in Thailand</h1>
                            <p>Choose the place and dates you wish to travel</p>
                            <p><strong>This page will be updated shortly</strong></p>
                            <br />
                        </div>
                    </div>
                </div>
                <hr />
                <Footer />
            </div>
        )
    }
}

export default Accommodation;