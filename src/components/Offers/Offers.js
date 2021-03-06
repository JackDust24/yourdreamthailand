import React, { Component } from 'react';
import OfferList from './OfferList';
import Footer from '../layout/Footer';
import Popup from 'react-popup';
import axios from 'axios';
import '../Shared/Popup.css';
import '../App.css';
import { BACK_URL } from '../../../src/index';

// const PATH_BASE = 'http://localhost:5000';

const PATH_SEARCH = '/offers';


class Offers extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOffer: "",
            contentResults: null,
        } 
    }

    // componentDidUpdate() {
    //     window.scrollTo(0, 0);
    //   }

    componentDidMount() {
    
        // Scroll to the top if called from another place
        window.scrollTo(0, 0);

        // Load up the Offers
        axios(`${BACK_URL}${PATH_SEARCH}`)
        .then(result => 
            this.setState({ contentResults: result.data}))

        .catch(error => alert(error.message));
        console.log('Offers request'); 

    }

    render() {

        return(  
            <div className="Offers">
                <div className="banner" id="banner-offers">
                    <br />
                    <br />
                    <div className="banner-offers-text">
                        <h1> Offers</h1>
                        <h3>
                        Scroll through and find some recommendations and offers
                        </h3>
                        <p id="photo-thanks">
                            Photo by <a href="https://unsplash.com/@kenwood123">Wang Xi</a> on <a href="https://unsplash.com/">Unsplash</a>
                        </p>
                    </div>
                </div>
                <div className="offers-area">
                    <br />
                    <br />
                    <h1>Recommended Offers</h1>
                    <p>Click on the links to find more.</p>
                    <br />
                    <OfferList contentResults={this.state.contentResults}/>
                    <Popup />
                </div>
                <hr />
                <Footer />

            </div>
        )
    }
}

export default Offers;