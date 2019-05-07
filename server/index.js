//jshint esversion:6
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const helmet = require('helmet'); // This helps protect our website
// const liveServer = require("live-server");

const app = express();

app.use((req, res, next) => {
    console.log('Request details. Method:', req.method, 'Original url:', req.originalUrl);
  
    next();
  });
  

//app.use(express.static("public"));

// This is for helping protext our website
app.use(helmet());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
  
    next();
  });
  
// This is for talking to our Client
app.use(express.static(path.join(__dirname, '../dist')));

// app.locals.engine = engine;
// app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

var allowedOrigins = ['http://localhost:3000',
                      'http://yourdreamthailand.com'];

app.use(cors({
  origin: function(origin, callback){

    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  }
}));



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));


// Connetc to the DB
// mongodb+srv://admin-jason:<password>@cluster0-vfpqp.mongodb.net/test?retryWrites=true

// mongoose.connect("mongodb://localhost:27017/travelDB", {useNewURLParser: true});
// Here we use our key from scret
mongoose.connect(keys.mongoURI, {useNewURLParser: true});

// Create a Schema
const placesSchema = {
  area: String,
  location: String,
  subLocation: String,
  description: String,
  places: String
}
// Create Article Model
const Place = mongoose.model("Place", placesSchema);

// Create a Schema
const activitiesSchema = {
  type: String,
  location: String,
  resultType: String,
  Latitude: Number,
  Longitude: Number,
  title: String,
  subtitle: String,
  description: String,
  importantNotes: String,
  link: String,
  image: String
}
// Create Article Model
const Activity = mongoose.model("Activity", activitiesSchema);

///////////////////////////////////Requests Targetting all Articles////////////////////////


// We need to tell Express how to find the index.html file.
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// })

app.route("/places")

.get(function(req, res){
  console.log("Normal");

  Place.find(function(err, foundPlaces){
    if (!err) {
      res.send(foundPlaces);
      console.log(foundPlaces);
    } else {
      res.send(err);
    }
  });
})

app.route("/places/:searchedPlace")

.get(function(req, res){
  console.log("Check this ");
  console.log(req.params.searchedPlace);

  Place.find({location: req.params.searchedPlace}, function(err, foundPlace){
    if (foundPlace) {
      res.send(foundPlace);
      console.log("Found place - ", foundPlace);

    } else {
      res.send("No place matching that title was found.");
    }
  });
})

// For activities
app.route("/activities/:searchedLocation/:searchedType")

.get(function(req, res){
  console.log("Check this Activity ");
  console.log(req.params.searchedLocation);
  console.log(req.params.searchedType);

// Scenario 1 - All locations & All Types
  if (req.params.searchedLocation === 'all' && req.params.searchedType === 'all') {

    Activity.find(function(err, foundActivities){
      if (foundActivities) {
        res.send(foundActivities);
        console.log("Scenario 1 - Found activities - ", foundActivities);
  
      } else {
        res.send("No activity matching that title was found.");
        res.send(err);
  
      }
    });

    // Scenario 2 - All Locations & Filtered Types
  } else if (req.params.searchedLocation === 'all' && req.params.searchedType !== 'all')  {
    Activity.find({type: req.params.searchedType }, function(err, foundActivity){
      if (foundActivity) {
        res.send(foundActivity);
        console.log("Scenario 2 - Found activity - ", foundActivity);
  
      } else {
        res.send("No activity matching that title was found.");
        res.send(err);
      }
    });
    // Scenario 3 - Filtered Location & All Types
  } else if (req.params.searchedLocation !== 'all' && req.params.searchedType === 'all') {

    Activity.find({location: req.params.searchedLocation }, function(err, foundActivity){
      if (foundActivity) {
        res.send(foundActivity);
        console.log("Scenario 3 - Found activity - ", foundActivity);
  
      } else {
        res.send("No activity matching that title was found.");
        res.send(err);
      }
    });

  // Scenario 4 - Both have filters on
  } else if (req.params.searchedLocation !== 'all' && req.params.searchedType !== 'all') {

    Activity.find({location: req.params.searchedLocation, type: req.params.searchedType }, function(err, foundActivity){
      if (foundActivity) {
        res.send(foundActivity);
        console.log("Scenario 4 - Found activity - ", foundActivity);
  
      } else {
        res.send("No activity matching that title was found.");
        res.send(err);
      }
    });
  }


})

// For activities
app.route("/activities/all")

.get(function(req, res){
  console.log("Wildcard these Activities ");

  Activity.find(function(err, foundActivities){
    if (foundActivities) {
      res.send(foundActivities);
      console.log("Found activities - ", foundActivities);

    } else {
      res.send("No activity matching that title was found.");
      res.send(err);

    }
  });
})


// For Offers & Recommendations

// Create a Schema
const offersSchema = {
  type: String,
  location: String,
  resultType: String,
  Latitude: Number,
  Longitude: Number,
  offerTitle: String,
  title: String,
  subtitle: String,
  description: String,
  importantNotes: String,
  link: String,
  image: String
}
// Create Offer Model
const Offer = mongoose.model("Offer", offersSchema);

// For offers
app.route("/offers")

.get(function(req, res){
  console.log("offers request");

  Offer.find(function(err, foundOffers){
    if (!err) {
      res.send(foundOffers);
      console.log(foundOffers);
    } else {
      res.send(err);
    }
  });
})


// Create a Schema
const recommendSchema = {
  type: String,
  location: String,
  resultType: String,
  Latitude: Number,
  Longitude: Number,
  title: String,
  subtitle: String,
  description: String,
  importantNotes: String,
  link: String,
  image: String
}
// Create Recomendation Model
const Recommend = mongoose.model("Recommend", recommendSchema);

// For Recomendations
app.route("/recommend/:chosenRecommendation")

.get(function(req, res){
  console.log("Check this Recommend ");
  console.log(req.params.chosenRecommendation);

  Recommend.find({location: req.params.chosenRecommendation}, function(err, foundRecommend){
    if (foundRecommend) {
      res.send(foundRecommend);
      console.log("Found foundRecommend - ", foundRecommend);

    } else {
      res.send("No recommendation matching that title was found.");
    }
  });
})




// // Test
// app.get('/topstories', (req, res, next) => {
//     console.log("TEST");
//     request(
//       { url: 'https://hacker-news.firebaseio.com/v0/topstories.json' },
//       (error, response, body) => {
//         if (error || response.statusCode !== 200) {
//             console.log("Error 1");

//           return next(new Error('Error requesting top stories'));

//         }
//         console.log("No error");

//         const topStories = JSON.parse(body);
//         const limit = 10;
  
//         res.json(
//           topStories.slice(0, limit).map(story => (
//             request(
//               { url: `https://hacker-news.firebaseio.com/v0/item/${story}.json` },
//               (error, response, body) => {
//                 if (error || response.statusCode !== 200) {
//                   return next(new Error('Error requesting story item'));
//                 }
  
//                 console.log('JSON.parse(body)', JSON.parse(body));
  
//                 return JSON.parse(body);
//               }
//             )
//           ))
//         );
//         console.log("Hello?");

//       }

//     )
//   });
  
  app.use((err, req, res, next) => {
    res.status(500).json({ type: 'error', message: err.message });
  });

// const PORT = 3000;

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening at ${PORT}`));