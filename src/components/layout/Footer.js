import React from 'react';
import './Footer.css';
import SocialProfiles from './SocialProfiles';

const Footer = () => (
  <footer className="Footer">
    <SocialProfiles />
    <br />
    &copy; yourdreamthailand {(new Date()).getFullYear()}
    <p />
    <p />

    <div className="landingpage-thankPhotos" style={{ display: 'inline-block', textAlign: 'center', width: 620}}>
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
          </div>
  </footer>
);

export default Footer;
