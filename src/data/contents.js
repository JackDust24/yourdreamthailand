import holiday from '../assets/robin-noguier-boat.jpg';
import tour from '../assets/ployTour.jpg';
import offTrack from '../assets/kanchanaburi-ploy.jpg';
import offers from '../assets/bundo-kim-501570-unsplash.jpg';
import flights from '../assets/rafa-prada-33597-unsplash.jpg';
import info from '../assets/bharath-mohan-temple.jpg';



const CONTENTS = [
  {
    id: 1,
    title: 'Type of Holiday',
    subtitle: 'See what types of things you can do and go based on your preference',
    description: 'If you are interested in Tours, Activities, Romantic spots, Areas off the Toutist Track - look here!',
    link: '/Home',
    image: holiday
  },
  {
    id: 2,
    title: 'Flights and Accommodation',
    subtitle: 'Book Flights and Accommodation for the times that you wish to travel',
    description: 'Have a look here for flights and hotels that might be of interest.',
    link: '/Flights',
    image: flights
  },
  {
    id: 3,
    title: 'Offers',
    subtitle: 'See what special offers are happening now in Thailand',
    description: 'Special Offers and Promotions for your visit to Thailand',
    link: '/Offers',
    image: offers
  },
  {
    id: 4,
    title: 'Off the Track',
    subtitle: 'Recommendations of where to go to avoid the touristy areas',
    description: 'Find those hidden beaches, those green lands in middle of the cities, the places to hike etc',
    link: '/Home',
    image: offTrack
  },
  {
    id: 5,
    title: 'Important Information',
    subtitle: 'Find important information for when you arrive in Thailand',
    description: 'Be aware of basic Thai to coummincate, local transport options and Do\'s and Don\'ts',
    link: '/Information',
    image: info
  },
  {
    id: 6,
    title: 'Tours',
    subtitle: 'Photography tours, Thailand trips, Social events and mmore',
    description: 'Go for a photopgraphy tour, hiking tours, cooking classes, pub crawls and many more.',
    link: '/Tours',
    image: tour
  }
];

export default CONTENTS;