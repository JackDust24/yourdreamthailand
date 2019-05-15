import React, { Component } from 'react';
import Footer from '../layout/Footer';
import '../App.css';

class Transport extends Component {

    // constructor(props) {
    //     super(props);
    
    // }

    componentDidMount() {
        console.log("component did mount");
        window.scrollTo(0, 0);
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
                                <div className="12Go">
                                    <script src="//cdn0.trainbusferry.com/tools/form/en/?id=3277226" 
                                    data-one2go="3277226" data-color="blue" 
                                    data-language="en" data-width="257" 
                                    data-height="321" data-border="1"
                                    data-radius="21" data-caption="Your Dream Thailand">
                                    </script>
                                    <div id="powered">Powered by <a href="https://12go.asia/?z=3277226">12Go Asia</a> system
                                    </div>
                                 </div>
                            <br />
                    </div>
                    <hr />
                    <Footer />
                </div>
        )
    }
}

export default Transport;