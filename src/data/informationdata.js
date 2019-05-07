import airport from '../assets/rafa-prada-33597-unsplash.jpg';
import shopping from '../assets/harvey-enrile-491-unsplash.jpg';
import transport from '../assets/braden-jarvis-732105-unsplash.jpg';
import rules from '../assets/christine-wehrmeier-1263290-unsplash.jpg';
import nightlife from '../assets/bundo-kim-501570-unsplash.jpg';

const INFORMATIONDATA = [
  {
    id: 1,
    title: 'Airport - What To Know',
    anchor: 'airport',
    description: 'Help on what to do when arriving at the airport when you land into Thailand',
    links: [ 
        {
          description : "Airport Layout",
          URL : "https://www.bangkokairportonline.com/suvarnabhumi-airport-terminal-map/"
        },
        {
          description : "Airport Shuttle Buses",
          URL : "https://www.bangkokairportonline.com/public-bus-service/"
        },
        {
          description : "Airport Hotel",
          URL : "https://www.bangkokairportonline.com/novotel-suvarnabhumi-airport-hotel/"
        },
        {
          description : "Left Luggage",
          URL : "https://www.bangkokairportonline.com/left-luggage/"
        },
        {
          description : "Luggage Storage - Can be delivered to your hotel",
          URL : "https://www.airportels.asia/solution/suvarnabhumi-airport-luggage-storage/"
        }
      ],
    info: 'When arriving into Suvarnabhumi airport and you have passed through Immigration, there are a couple of thinks you can do at the airport.\n\n * Change Money - there are many ATMs and currency exchange places. \n\n * Taxi rank - There is a taxi rank on the first floor. Do note there is a small cover charge of around 50 baht as well as the meter fee plus you will have to pay any motorway toll charges. \n\n * Airport Link - Head to Floor 1 There is an airport link (a skytrain) that travels into the centre of the town and will be cheaper than the taxis, though more carrying around of your luggaage. Find details below.\n\n * Airport Bus - There are buses that run into town with information where they go find below.\n\n * Need to stay at the Airport hotel, you have the Novotel hotel near by.\n\n * Luggage Storage can be found in the airport. There are a couple of places that you can do this in the airport, which is highlighted below.',
    image: airport
  },
  {
    id: 2,
    title: 'Transport - Getting Around Thailand',
    anchor: 'transport',
    description: 'Links to details regarding some of the transport options around Thailand',
    links: [ 
        {
          description : "Search for transport",
          URL : "https://www.yourdreamthailand.com/transport"
        }
      ],
    info: 'There are many ways to travel around Thailand. Bangkok itself has a skytrain, airport link, underground subyway system and a canal boat service among others. Have a look at our Find Transport page for more details.\n\n * Flying - There are many flight options, with many very reasonable options for flying to destinations in and around Thailand. \n\n * Trains - There are trains that go to destinations all around the country. \n\n * Buses - There are many different companies that supply different routes and differing varieties of luxury.\n\n * Local Buses - There are local buses that go around each city and town.\n\n * Boats - There are boats that can take you from some parts of Thailand to the islands and there are also some river boats that can take you around Bangkok.\n\n * Taxis - Taxis and motorbike taxis can be found in every city and town in Thailand. For taxis make sure the taxi driver turns on the meter and find out any fee for a motorbike ride before you get on.', 
    image: transport
  },
  {
    id: 3,
    title: 'Do\s and Don\'ts',
    anchor: 'rules',
    description: 'Every country and culture has different views on what is acceptable and what isn\'t. Here we list some things to be aware of.',
    links: [],
    info: '  DO:\n\n\n * Do dress properly when visiting temples. You are not at the beach!\n\n * Do treat Thai elders and monks with high respect.\n\n * Do respect the monarchy and anything related to Buddha. Both are important and are sacred to Thailand.\n\n * Do take your shoes off before entering some homes and certain shops if asked.\n\n * Do make sure you have travel insurance.\n\n\n   DON\T:\n\n\n * Don\'t ever say anything bad or insult the Royal Family. You could end up in jail.\n\n * Don\'t lose your temper or raise your voice.\n\n * Don\'t get into heated arguments or get into fights like you do back home. Thais don\'t like to lose face.\n * Don\'t touch or hug a Thai woman without their consent. Can be very embarassing and humiliating for the woman in some cases.\n\n * Don\'t overstay your visa, there are harsh penalties now.\n\n * Don\'t show too much skin in public areas. Going around a shopping mall or city centre topless will make you look like some crazy in front of the Thais.\n\n * Don\'t touch people\'s heads if there are not too close to you personally.',
    image: rules
  },
  {
    id: 4,
    title: 'Nightlife and Restaurants',
    anchor: 'nightlife',
    description: 'What nightlife does Thailand have to offer?',
    links: [ 
        {
          description : "Eating and more",
          URL : "https://www.bkkmenu.com/"
        },
        {
          description : "Craft Beer - Find Craft Beer Bars in Bangkok",
          URL : "https://www.bkkcraftbeer.com"
        }
    ],
    info: 'There are many restaurants and bars all over Thailand.\n\n * Restaurants - You can find many restaurants, Thai, Japanese, Indian, Korean, European, Vegetarian all over Thailand. Google is your best friend here. We list a link to a good site below.\n\n * Bars - All cities will have Thai bars on almost every major road plus many little sois (side roads), go on a venture to find them. You will also find more upmarket bars (gin bars, stylish bars, Irish bars, craft beer bars, you name it) catered for hip Thais and foreigners alike.\n\n * Nightclubs - Bangkok is the place to go if you fancy visiting nightclubs. They might not be as it once was, but plenty are still about and thriving.',
    image: nightlife
  },
  {
    id: 5,
    title: 'Shopping',
    anchor: 'shopping',
    description: 'Shopping Malls and Markets fill around all the towns and centres',
    links: [ 
        {
          description : "Central World",
          URL : "http://www.centralworld.co.th/"
        },
        {
          description : "Train Markets",
          URL : "http://www.bangkok.com/shopping-market/rot-fai-market.htm"
        },
        {
          description : "Terminal 21",
          URL : "https://www.terminal21.co.th/"
        },
        {
          description : "Chatuchak Market",
          URL : "http://www.chatuchak.org/"
        },
        {
          description : "Mega Bangna",
          URL : "https://www.mega-bangna.com/"
        }
    ],
    info: 'You will find Shopping Malls nand Markets fill around all places. For this list we will just focus on Bangkok.\n\n * Shopping Malls - In a place as big as Bangkok, you are spoilt for choice. Recommendations are Central World, MBK, ThirdPlace 101, Mega BangNa, Terminal 21 and EmQuartier to name just a few.\n\n * Markets - There are a couple of recommendations here. Head to the weekend market in Chatuchak (by Mo Chit station) and the old train markets in Sirikhan and Ratchada.',
    image: shopping
  }
];

export default INFORMATIONDATA;
