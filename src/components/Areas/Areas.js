import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AreasList from './AreasList';
import Footer from '../layout/Footer';
import '../App.css';

class Areas extends Component {

    constructor(props) {
        super(props);
    
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