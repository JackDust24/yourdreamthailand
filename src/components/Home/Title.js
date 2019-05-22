import React, { Component } from 'react';

const TITLES = [
  'Choose the holiday that caters for you',
  'Find Flights and Accommodation',
  'Find Places to go to',
  'Fnd Activities to do',
  'Tours and Recommendations for meeting others',
  'See our Special Offers from local businesses',
  'Know about the various places in Thailand',
  'See recommendations on where to go and what to do',
  'Build an Itinerary for your holiday',
  'Fancy a relaxing holiday with spas, beaches and rivers?',
  'Where to go on a Honeymoon?', 
  'Want to go on a Photography tour?',
  'Want to find local tours?',
  'Find about placess Off The Tourist Track',
  'Want to know where is good for the family?',
  'Help with important information as soon as you arrive?',
];

class Title extends Component {

	state = { titleIndex: 0, fadeIn: true };

	componentDidMount() {
    this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
      this.setState({ titleIndex, fadeIn: true });
      this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
    }, 4000);
  }

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[titleIndex];

    return (
      <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}>{title}</p>
    )
  }
}

export default Title;
