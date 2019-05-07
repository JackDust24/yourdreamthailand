import React, { Component } from 'react';
import Select from 'react-select';
import ActivityResults from './ActivityResults';
import ActivityOtherResults from './ActivityOtherResults';
import Button from '@material-ui/core/Button';
// import ThailandMap from './ThailandMap';
import axios from 'axios';
import '../App.css';

const PATH_BASE = 'http://localhost:5000';
const PATH_SEARCH = '/activities';


const style = {
    display: 'inline-block',
    margin: 10,
    flexGrow: 1,
    marginBottom: 30
};

const locationOptions = [
    { value: 'all', label: 'All' },
    { value: 'Bangkok', label: 'Bangkok' },
    { value: 'Chiang Mai', label: 'Chiang Mai' },
    { value: 'Kanchanaburi', label: 'Kanchanaburi' }
  ];

const typeOptions = [
    { value: 'all', label: 'All' },
    { value: 'tour', label: 'Tours' },
    { value: 'romantic', label: 'Romantic Ideas' },
    { value: 'offtrack', label: 'Off the Tourist Track' },
    { value: 'activity', label: 'Activities' },
    { value: 'family', label: 'Ideas for the family' },
    { value: 'relax', label: 'Relaxing Ideas' }
  ];

// We will set up two properties, so that we can update the states later
let searchButtonPressed = false;
let optionSelected = false;


class Activities extends Component {

    get ActivityView() {
        const { activity } = this.props;
        console.log("Get Later")

    }

    constructor(props) {
        super(props);
        
        this.state = {
            selectedType: '',
            selectedLocation: '',
            contentResults: null,
        }
    
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);


    }

    handleSubmitButton = () => {
        // e.preventDefault();
        if (optionSelected == false) {
            console.log('No option has been selected yet');
            return;
        }
        searchButtonPressed = true;

        console.log('Button Pressed but Location Option selected: ' + this.state.selectedLocation.value);

        let encodedLocationValue = encodeURIComponent(this.state.selectedLocation.value);
        let encodedTypeValue = encodeURIComponent(this.state.selectedType.value);

        if (this.state.selectedLocation.value === 'all' || 
            typeof(this.state.selectedLocation.value) === null ||
            typeof(this.state.selectedLocation.value) === 'undefined' ) {
                console.log("selectedLocation: Null");
                encodedLocationValue = 'all';

            }

            if (this.state.selectedType.value === 'all' || 
            typeof(this.state.selectedType.value) === null ||
            typeof(this.state.selectedType.value) === 'undefined' ) {
                console.log("selectedType: Null");
                encodedTypeValue = 'all';

            }
        
    
        // console.log("input field updated with "+e.target.value);
        // console.log("input field updated with " + this.state.searchText);
        const searchedLocation = "all";

        // axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)

        console.log(encodedLocationValue);
        // fetch(`http://localhost:5000/activities/${ encodedLocationValue }/${ encodedTypeValue }`)
        axios(`${PATH_BASE}${PATH_SEARCH}/${ encodedLocationValue }/${ encodedTypeValue }`)

    //   .then(response => {response.json().then(result => {
    //     console.log("Response: ");
    //     console.log(result);

    //     this.setState({
    //         contentResults: result
    //       });
    //     })
    //   })

      .then(result => 
        this.setState({ contentResults: result.data}))


      .catch(error => alert(error.message));
      console.log('Fetch Home - '); 

      console.log(this.state.contentResults); 


    }

    handleLocationChange = (selectedLocation) => {

        optionSelected = true;

        console.log("Location Option selected: " + selectedLocation.value);

        this.setState({ selectedLocation });

        console.log('chosenLocation selected:' + selectedLocation.value);

        // console.log('Location Option selected:' + this.state.selectedLocation.value);
    }


    handleTypeChange = (selectedType) => {

        optionSelected = true;

       this.setState({ selectedType });
        console.log('Type Option selected: ' + selectedType.value);

        console.log('chosenType selected:' + selectedType.value);
    }

    // shouldComponentUpdate (nextProps, nextState){
    //     if (searchButtonPressed === true) {
    //         console.log('searchButtonPressed TRUE');
    //         searchButtonPressed = false;
    //         return true;
    //     } else {
    //         console.log('searchButtonPressed FALSE');
    //         return false;
    //     }
    // }

componentDidUpdate() {
    console.log('componentDidUpdate');
    if (searchButtonPressed === true) {
        searchButtonPressed = false;
    }
}

    componentWillUnmount() {
        console.log('componentWillUnmount');
        if (searchButtonPressed === true) {
            searchButtonPressed = false;
        }
    }



    render() {

        console.log('render');
        const { selectedType: selectedType, selectedLocation: selectedLocation } = this.state;

        return(
            <div className="holiday-body">
                <div className="holiday-header">
                    <h1 style={style}>Select what you are looking for</h1>
                </div>
                <div className="filter-area">
                    <div className="filter-area-notes">
                        <div className="select-notes" style={{ display: 'inline-block', width: 300, margin: 20, zIndex:10, textAlign: 'left' }}>
                            <ul>
                                <li>Add Location you wish to search or select <strong>'All'</strong> </li>
                                <li>Choose the specific type of holiday/activity you are looking for:</li>
                            </ul>
                        </div>
                        <div className="select-notes" style={{ display: 'inline-block', width: 440, margin: 20, zIndex:10, textAlign: 'left' }}>
                            <ul>
                                <li><strong>Off The Track</strong> - Great places that tourists may not know about </li>
                                <li><strong>Tours</strong> - Hiking, Cycling, Travel, Photography tours and more</li>
                                <li><strong>Family</strong> - Family oriented activities and places to visit</li>
                            </ul>
                        </div>
                        <div className="select-notes" style={{ display: 'inline-block', width: 440, margin: 20, zIndex:10, textAlign: 'left' }}>
                            <ul>
                                <li><strong>Romance</strong> - Places for honeymooners and romantic places to go</li>
                                <li><strong>Relax &amp; Chill</strong> - Spas, quiet beaches and forests, cafes etc</li>
                                <li><strong>Activities</strong> - Activities and adventures</li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-area-options">

                        <div className="select" id="select-location" style={{ display: 'inline-block', width: 320, margin: 10, zIndex:10 }}>
                            <h3>Select Location</h3>
                            <Select
                                    value={selectedLocation}
                                    onChange={this.handleLocationChange}
                                    options={locationOptions}
                                />
                        </div>
                        <div className="select" style={{ display: 'inline-block', width: 320, margin: 10, zIndex:10 }}>
                            <h3>Select Tours, Activities etc</h3>
                            <Select
                                    value={selectedType}
                                    onChange={this.handleTypeChange}
                                    options={typeOptions}
                                />
                        </div>

                        <hr />                
                    </div>

                </div>
                {/* <div id="select-button" style={{ display: 'inline-block'}}>
                            <button onClick={this.handleSubmitButton}
                        type="button">Search</button>

                </div> */}
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={this.handleSubmitButton} >
                    Search
                </Button>
        
                {/* <div className="map_area">
                    <ThailandMap />
                </div> */}
                <div className="results">

                    {searchButtonPressed == true
                    ?<div>
                        <div className="results-recommendations" style={{zIndex:1}}>
                            <h1>Search Results - Recommended Options</h1>
                            <ActivityResults selectedType={selectedType.value} selectedLocation={selectedLocation.value} />                
                        </div>
                        <div className="other-results">
                            {this.state.contentResults.length > 0
                            ? <span>
                                <h1>Other Recommendations</h1>
                                <ActivityOtherResults contentResults={this.state.contentResults} />    
                            </span>
                            : 
                            <span>
                                <h2>We currently do not have any other recommendations for this query</h2>
                            </span>
                            }
                        </div>
                    </div>
                    : 
                    <div>
                        <h2 style={{ display: 'inline-block', textAlign: 'center'} } />
                    </div>

                    }
                </div>


            </div>


        )
    }
}


export default Activities;