import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from '../layout/Footer';

import '../App.css';


class Transport extends Component {

    constructor(props) {
        super(props);
    
    }

    render() {

        return(  
            <div className="Transport">
                    <div className="banner" id="banner-transport">
                        <br />
                        <br />
                        <div className="banner-transport-text">
                            <h1>Transport In Thailand</h1>
                            <h3>
                            The different ways to travel through Thailand
                            </h3>
                            <p id="photo-thanks">
                            Photo by <a href="https://unsplash.com/photos/fsLDdUqDPNo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">LIM ENG</a> on <a href="https://unsplash.com/">Unsplash</a>
                            </p>
                               
                        </div>
                    </div>
                    <div className="transport-area">
                        <br />
                        <br />
                        <h1>Travelling in Thailand</h1>
                            <p>There are many ways to travel though Thailand</p>
                            <p>Here, you can choose your start and destination that suits you.</p>

                            <p><strong>This page will be updated shortly</strong></p>
                            <br />
                    </div>
                    <hr />
                    <Footer />
                </div>
        )
    }
}

export default Transport;