import React, { Component } from 'react';
import CONTENTS from '../../data/contents';
import '../App.css';
import { fadeIn, bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

 const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  },
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
};

const Contents = () => {
//   <ul>
//     {ACTIVITYRESULTS.map((item, key) => (
//       <li key={key}>
//         {item.subtitle}
//       </li>
//     ))}
//   </ul>

    return (
        <StyleRoot>

        <div>
            <h2>Explore the site</h2>
            <div>
                {CONTENTS.map((item, key) => (
                // RESULT_TYPES.map(RESULT => (
                // <ActivityResult key={ACTIVITYRESULT.id} activityResult={ACTIVITYRESULT} />
                <div 
                key={key} 
                className="contents" 
                style={{ display: 'inline-block', width: 320, margin: 10, ...styles.bounce}}>

                    <div className="contents-text">
                        <h3>{item.title}</h3>
                        <h4>{item.subtitle}</h4>
                        <img src={item.image} alt='profile' style={{ width: 300, height: 120 }} />
                        <p>{item.description}</p>
                    </div>
                    <div className="contents-link">
                            <a href={item.link}>Read more ...</a>
                    </div>
                </div>
                ))
                }
            </div>
        </div>
        </StyleRoot>

    )

};

export default Contents;

