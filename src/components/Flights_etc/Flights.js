/*
This component is for displaying the Flights that we get from SkyScanner
    it is called by the main menu.
*/

import React, { Component } from 'react';
import Footer from '../layout/Footer';

import '../App.css';

class Flights extends Component {

    componentDidMount() {
        console.log("component did mount");
        window.scrollTo(0, 0);
      }

    render() {

        return(  
            <div className="Flights">
                <div className="banner" id="banner-flights">
                    <br />
                    <br />
                    <div className="banner-flights-text">
                        <h1>Find Flights to Thailand</h1>
                        <h3>
                        Choose your flights to Thailand
                        </h3>   
                        <p id="photo-thanks">
                        Photo by <a href="https://unsplash.com/@rafaprada">Rafa Prada</a> on <a href="https://unsplash.com/">Unsplash</a>
                        </p>
                    </div>
                </div>
                <div className="flights-area">
                    <br />
                    <br />
                    <h1>Flights in Thailand</h1>
                        <p>Select the dates you wish to fly to Thailand</p>
                        <p><strong>This page will be updated shortly</strong></p>
                        <br />

                </div>
                <hr />
                <Footer />
            </div>
        )
    }
}

export default Flights;