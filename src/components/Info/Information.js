import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InformationList from './InformationList';
import Footer from '../layout/Footer';

import { Link } from 'react-router-dom';

import '../App.css';

class Information extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {

        return(  
            <div className="Information">
                    <div className="banner-information">
                        <br />
                        <br />
                        <div className="banner-information-text">
                            <h1>Helpful Information</h1>
                            <h3>
                              Scroll through and find helpful information on Thailand
                            </h3>
                            <p id="photo-thanks">
                            Photo by <a href="https://unsplash.com/@mybbor">Robby McCullough</a> on <a href="https://unsplash.com/">Unsplash</a>
                            </p>
                        </div>
                    </div>
                    <div className="information-area" style={{textAlign: 'left', alignSelf: 'stretch'}}>
                        <br />
                        <br />
                        <h1>Helpful Information on Thailand</h1>
                            <h3>Scroll down to find more information on the following</h3>
                            <br />
                            <ul>
                              <li><a href="#airport">When you arrive at Airport</a></li>
                              <li><a href="#transport">Transport Options in Thailand</a></li>
                              <li><a href="#rules">Do's and Don'ts</a></li>
                              <li><a href="#nightlife">Nightlife and Restaurants</a></li>
                              <li><a href="#shopping">Shopping</a></li>
                            </ul>
                            <br />
                            <br />
                            <hr />
                            <br />
                            <br />
                            <InformationList />
                    </div>
                    <Footer />
                </div>
        )
    }
}

export default Information;