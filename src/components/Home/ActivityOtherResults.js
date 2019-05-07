
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

        // this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
        // this.setSearchTopStories = this.setSearchTopStories.bind(this);
        // this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
        // this.onSearchChange = this.onSearchChange.bind(this);
        // this.onSearchSubmit = this.onSearchSubmit.bind(this);

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

        // const { type, location, resultType, latitude, longitude, title, subtitle, description,
        // importantNotes, link, image } = this.props;

        console.log("PROPS");
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

        // const selectedType = this.props.selectedType;

        // const selectedLocation = this.props.selectedLocation;

        // var resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.type === selectedType && ACTIVITYRESULTS.location === selectedLocation;
        // console.log(selectedType);
        // console.log('resultsFilter>')

        // if (typeof(selectedType) === 'undefined' || selectedType == null || selectedType === "all") {
        //     console.log('No Selected Type')
        //     var resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.location === selectedLocation;

        // } else if (typeof(selectedLocation) === 'undefined' || selectedLocation == null || selectedLocation === "All") {
        //     console.log('No Selected Location')
        //     var resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.type === selectedType;

        // }   

        // return (
        //     <div>
        //         <h2>Results</h2>
        //         <div>
        //             {
        //             ACTIVITYRESULTS.filter(resultsFilter).map(ACTIVITYRESULT => (
        //             // RESULT_TYPES.map(RESULT => (
        //             <ActivityResult key={ACTIVITYRESULT.id} activityResult={ACTIVITYRESULT} />

        //             ))
        //             }
        //         </div>
        //     </div>
        // )
    //}
}

export default ActivityOtherResults;