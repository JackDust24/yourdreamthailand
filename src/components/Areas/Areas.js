/*
This component is for displaying the different places in Thailand
    it is called by the main menu.
*/

import React, { Component } from 'react';
import AreasList from './AreasList';
import Footer from '../layout/Footer';
import '../App.css';

class Areas extends Component {

    constructor(props) {
        super(props);
    
    }

    // We scroll up to the top of the window when the link is accessed
    componentDidMount() {
        console.log("component did mount");
        window.scrollTo(0, 0);
      }
    
    render() {

        return(  
            <div className="Areas">
                <div className="banner-areas">
                    <br />
                    <br />
                    <div className="banner-areas-text">
                        <h1>Places In Thailand</h1>
                        <h3>
                        Scroll through and find information of places in Thailand
                        </h3>
                        <p id="photo-thanks">
                        Photo by <a href="https://unsplash.com/@illusn">Bharath Mohan</a> on <a href="https://unsplash.com/">Unsplash</a>
                        </p>
                    </div>
                </div>
                <div className="areas-area">
                    <br />
                    <br />
                    <h1>Places in Thailand</h1>
                    <p>Scroll down to find more information on each area</p>
                    <br />
                    <AreasList />
                </div>
                <hr />
                <Footer />
            </div>
        )
    }
}

export default Areas;