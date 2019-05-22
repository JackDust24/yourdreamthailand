
import React, { Component } from 'react';
import '../App.css';

const DEFAULT_QUERY = '';

class ActivityOtherResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: null,
            searchKey: '',
            isLoading: false,
            searchTerm: DEFAULT_QUERY,
        };

        this.copyText = this.copyText.bind(this);
    }

    // Use at a later data to copy the data
    copyText = (event) => {
        let value = event.target.value;
        console.log('Clicked - ' + value)
    }

    render(props) {

        const contentResults = this.props.contentResults;

        console.log("ActivityOtherResults");
        console.log(contentResults);


        if (contentResults) {
            console.log("There are props");
            // const contentResults = this.props.contentResults;
            // console.log(contentResults);


        } else {
            console.log("There are NO props");
            return null;

        }

        let resultListBlock = '';

        return (
               
            <div className="fetchResults">
              { resultListBlock = Object.keys(contentResults).map(item => 
                <div key={contentResults[item]._id} className="table-row">
                  <span style={{ width: '10%' }}>
                    {contentResults[item].type}
                  </span>
                  <span style={{ width: '10%' }}>
                    {contentResults[item].location}
                  </span>
                  <span style={{ width: '10%' }}>
                    {contentResults[item].title}
                  </span>
                  <span style={{ width: '30%' }}>
                  {contentResults[item].subtitle}
                  </span>
                </div>
                )}
              </div> 

            )
    }

}

export default ActivityOtherResults;