import React, { Component } from 'react';
import Title from './Title';
import Footer from '../layout/Footer';
import Activities from '../Home/Activities';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { BASELINE_URL , BACK_URL } from '../../../src/index';

import '../App.css';


//import './App.css';

class Home extends Component {

  

  // State - 1. Get the areas to pop up
  state = { displayArea: false };

  // Toggle the state  
  toggleDisplayArea = () => {
    this.setState({ displayArea: !this.state.displayArea });
  }

  componentDidMount() {
    console.log("component did mount");
    window.scrollTo(0, 0);
  }

  render() {

    console.log('Home');

      return (
      <div className="Home">
        <ParallaxProvider>
        <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">

          <div className="banner" id="banner-home">
            <p />
            <p />
            <div className="banner-home-text">

              <h1> Your Dream Thailand </h1>
              <Title />
              <p>
              Here at Your Dream Thailand we will help you find the places you wish to go.
              </p>
              {
                this.state.displayArea ? (
                  <div>
                    <p>You can find the destination for your trip/holiday.</p>
                    <p>You can choose the type of trip tou wish, relaxing, adventure & luxury</p>
                    <p>Find the best activities and places to go</p>
                    <button onClick={this.toggleDisplayArea}>Show less</button>
                  </div>
                ) : (
                  <div>
                    <button onClick={this.toggleDisplayArea}>Read more</button>
                  </div>
                )
              }
              <p />
            </div>
          </div>
        </Parallax>
        <hr />
        <div className="Activity">
          <Activities />
        </div>
        </ParallaxProvider> 

        <hr />
        <Footer />
      </div>

    )
  }
}

export default Home;
