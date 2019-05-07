import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Title from './Home/Title';
import AreasThumbs from './Areas/AreasThumbs';
import Contents from './Home/Contents';
import { withRouter } from 'react-router-dom';
import Footer from './layout/Footer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { createBrowserHistory } from 'history'
import { Zoom } from 'react-slideshow-image';
import image1 from '../assets/bharath-mohan-temple.jpg';
import image2 from '../assets/mo-baghdadi-island.jpg';
import image3 from '../assets/mathew-schwartz-temple.jpg';
import image4 from '../assets/peter-john-maridable-bridge.jpg';
import image5 from '../assets/azrul-aziz-romance.jpg';
import image6 from '../assets/robby-buddha.jpg';
import image7 from '../assets/robby-food.jpg';
import image8 from '../assets/robby-cm1.jpg';
import image9 from '../assets/robby-cm2.jpg';
import image10 from '../assets/robby-oldhomes.jpg';
import image11 from '../assets/robin-noguier-boat.jpg';
import image12 from '../assets/wang-xi-pool.jpg';
import image13 from '../assets/lim-eng-train.jpg';
import image14 from '../assets/robin-noguier-boat.jpg';
import image15 from '../assets/robby-food.jpg';
import image16 from '../assets/bharath-mohan-temple.jpg';
import axios from 'axios';
import { BASELINE_URL , BACK_URL } from '../index'

// import process.env.DEV_URL from '../../env';

import './App.css';

//import './App.css';

class App extends Component {

  // State - 1. Get the areas to pop up
  state = { displayArea: false };

  // Toggle the state  
  toggleDisplayArea = () => {
    this.setState({ displayArea: !this.state.displayArea });
  }

  enterHomePage = () => {
    let path = `/home`;
    this.props.history.push(path);
  }

  render() {
// Test env
    console.log(BASELINE_URL) // Some Value


    const images = [
      image1,
      image2,
      image3,
      image7,
      image11,
      image15,
      image4,
      image9,
      image16,
      image12,
      image5,
      image8,
      image13,
      image10,
      image6,
      image14
    ];
     
    const zoomOutProperties = {
      duration: 3500,
      transitionDuration: 500,
      infinite: true,
      indicators: true,
      scale: 0.4,
      arrows: true
    }
     
    const Slideshow = () => {
        return (
          <Zoom {...zoomOutProperties}>
          
            {
              images.map((each, index) => 
              <div className="home-container" key={index} style={{width: "100%", height: "500px"}}>
                <img style={{width: "100%", height: "500px"}} src={each} />
                <div className="centered">
                  <Title />
                </div>
              </div>)
            }

          </Zoom>

        )
    }
  

    return (
      <ParallaxProvider>

        <div className="App">
          <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
              <Slideshow />
          </Parallax>
          <hr />
          <div className="landingpage-entersite">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={this.enterHomePage} >
              Enter Site
            </Button>
          </div>
          
          <hr />
          <div className="Contents">
            <Contents />
          </div>
          <hr />
          <div className="AreasThumbs">
            <AreasThumbs />
          </div>
  
          <hr />
          {/* <div className="landingpage-thankPhotos" style={{ textAlign: 'left' }}>
            <h5>
              YourDreamThailand will like to thank the following for their amazing photos:
              </h5>
              <p>
                @gypsypianist, <a href="https://www.instagram.com/gypsypianist_ploiiiibz/">Instagram Profile.</a>
              </p>
              <p>
                From <a href="https://unsplash.com/">Unsplash</a> we like to say a big thank you to the following:   

                <a href="https://unsplash.com/@mybbor">    Robby McCullough
                , </a><a href="https://unsplash.com/@fr33water">Frankie Spontelli, </a><a href="https://unsplash.com/@shadoweng93">Lim Eng, </a><a href="https://unsplash.com/@harveyenrile">Harvey Enrile, </a><a href="https://unsplash.com/@pj24dm">Peter John Maridable, </a><a href="https://unsplash.com/@cwehrmeier">Christine Wehrmeier, </a><a href="https://unsplash.com/@cadop">Mathew Schwartz
                , </a><a href="https://unsplash.com/@bundo">Bundo Kim
                , </a><a href="https://unsplash.com/@jarvisphoto">Braden Jarvis
                , </a><a href="https://unsplash.com/@playserious">Mo Baghdadi
                , </a><a href="https://unsplash.com/@rafaprada">Rafa Prada
                , </a><a href="https://unsplash.com/@roy23">Azrul Aziz
                , </a><a href="https://unsplash.com/@illusn">Bharath Mohan
                , </a><a href="https://unsplash.com/@robinnoguier">Robin Noguier
                and </a><a href="https://unsplash.com/@kenwood123">Wang Xi
                .</a>
              </p>
            </div> */}

          <Footer />


        </div>
      </ParallaxProvider>

    )
  }
}

export default withRouter(App);
