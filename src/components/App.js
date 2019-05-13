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
    console.log('history - props - ' + this.props.history);
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

          <Footer />


        </div>
      </ParallaxProvider>

    )
  }
}

export default withRouter(App);
