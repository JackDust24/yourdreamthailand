import React, { Component } from 'react';
import ACTIVITYRESULTS from '../../data/activityresults';
import '../App.css';

const DEFAULT_QUERY = '';

class ActivityResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newItem: "",
            list: [],
        };

        // this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
        // this.setSearchTopStories = this.setSearchTopStories.bind(this);
        // this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
        // this.onSearchChange = this.onSearchChange.bind(this);
        // this.onSearchSubmit = this.onSearchSubmit.bind(this);

    }

      // 4. So we can hyrdate the page with the local storage
  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });

    // 1. update localStorage
    localStorage.setItem(key, value);
  }

  addItem = (e, subtitle) => {
    let title = e.target.value;
    console.log('Clicked 1 value - ' + title);

    console.log('Clicked 1 event - ' + subtitle);

    const itemToAdd = [];
    itemToAdd.push(title);
    itemToAdd.push(subtitle);

    // const { type, title, subtitle, link, description, image } = event.target.value;
    // console.log('Clicked 2 title - ' + title);

    // create a new item
    // create a new item
    const newItem = {
      id: 1 + Math.random(),
      value: itemToAdd.slice()
    };

    console.log('newItem - ' + newItem);

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });

    // 2. update localStorage

  }


  // 5. Method for hyrdating the page with the local storage
  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
}

// 6. To save all state to local storage
saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
}

    // Use at a later data to copy the data
    copyText = (event) => {
        let value = event.target.value;
        console.log('Clicked - ' + value)
    }

    render() {

      let chosenLocation = '';
      let chosenType = '';
        
        const ActivityResult = (props) => {

            console.log('ActivityResult>')

            // console.log(props.activityResult);

            const { location, type, title, subtitle, link, description, image } = props.activityResult;

            return (
                <div className="listings" style={{ display: 'inline-block', width: 320, margin: 10}}>
                    <div className="listings_text">
                        <h3>{location} - {type}</h3>
                        <h4>{title}</h4>
                        <h5>{subtitle}</h5>
                        <img src={image} alt='profile' style={{ width: 300, height: 120 }} />
                        <p>{description}</p>
                    </div>
                    <div className="listings_link">
                    <button 
                    value={title}
                    onClick={e => this.addItem (e, subtitle) }  >
                Save </button>
                        <a href={link}>{link}</a>
                    </div>
                </div>
                )
        }

        const selectedType = this.props.selectedType;

        const selectedLocation = this.props.selectedLocation;

        // var resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.type === selectedType && ACTIVITYRESULTS.location === selectedLocation;
        console.log(selectedType);
        console.log('resultsFilter>' + selectedLocation);

        // if (selectedLocation === 'all') {
        //   console.log('selectedLocation = all')

        //   ACTIVITYRESULTS.location = null;
        //   //selectedLocation = null; // Because we want to extract all
        // }

        // if (selectedType === 'all') {
        //   console.log('selectedLocation = all')

        //   ACTIVITYRESULTS.type = null;
        //   //selectedLocation = null; // Because we want to extract all
        // }

        // if (typeof(selectedType) === 'undefined' || selectedType == null) {
        //     console.log('No Selected Type')
        //     // resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.location;

        // } else if (typeof(selectedLocation) === 'undefined' || selectedLocation == null) {
        //     console.log('No Selected Location')
        //     resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.type;

        // }   

        var resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.type === selectedType && ACTIVITYRESULTS.location === selectedLocation;


        if (typeof(selectedLocation) === 'undefined') {
          console.log('selectedLocation = all or undefined')

          chosenLocation = 'all';
          //selectedLocation = null; // Because we want to extract all
        } else {
          console.log('selectedLocation = filtered');

          chosenLocation = selectedLocation;
        }

        if (typeof(selectedType) === 'undefined') {
          console.log('selectedType = all or undefined')

          chosenType = 'all';
          //selectedLocation = null; // Because we want to extract all
        } else {
          console.log('selectedType = filtered');

          chosenType = selectedType;
        }

        console.log('resultsFilter 1 >' + chosenLocation);

        // Filter through each scenario

        if (chosenLocation === 'all' && chosenType === 'all') {
          console.log('Scenario 1');
          resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.type && ACTIVITYRESULTS.location;

        } else if (chosenLocation === 'all' && chosenType !== 'all') {
          console.log('Scenario 2');
          resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.type === selectedType;


        } else if (chosenLocation !== 'all' && chosenType === 'all') {
          console.log('Scenario 3');
          resultsFilter = ACTIVITYRESULTS => ACTIVITYRESULTS.location === selectedLocation;

        } else if (chosenLocation !== 'all' && chosenType !== 'all') {
          console.log('No need to adjust the filter');

        }


        return (
            <div>
                {/* <h2>Results</h2> */}
                <div>
                    {
                    ACTIVITYRESULTS.filter(resultsFilter).map(ACTIVITYRESULT => (
                    // RESULT_TYPES.map(RESULT => (
                    <ActivityResult key={ACTIVITYRESULT.id} activityResult={ACTIVITYRESULT} />

                    ))
                    }
                </div>
            </div>
        )
    }
}

export default ActivityResults;