import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Home from './components/Home/Home';
import Areas from './components/Areas/Areas';
import Information from './components/Info/Information';
import Offers from './components/Offers/Offers';
import Flights from './components/Flights_etc/Flights';
import Accommodation from './components/Flights_etc/Accommodation';
import Tours from './components/Flights_etc/Tours';
import Transport from './components/Flights_etc/Transport';
import PDFViewer from './components/Shared/PDFViewer';
import '../src/index.css';

// import PlacesNew from './components/PlacesNew';
import NavBar from './components/Shared/NavBar';

const PROD_URL = 'https://yourdreamthailand.com';
// const DEV_URL = "http://localhost:3000"
const BACK_URL = "http://localhost:5000"
const BASELINE_URL = PROD_URL;

console.log('My Minimal React Webpack Babel Setup');
// The render={() means we don't have to add the Header to each page
ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
    {/* <Route basename={BASELINE_URL} exact path='/' render={() => <NavBar><App /></NavBar>} />
      <Route basename={BASELINE_URL} path='/home' render={() => <NavBar><Home /></NavBar>} />
      <Route basename={BASELINE_URL} path='/flights' render={() => <NavBar><Flights /></NavBar>} />
      <Route basename={BASELINE_URL} path='/accommodation' render={() => <NavBar><Accommodation /></NavBar>} />
      <Route basename={BASELINE_URL} path='/tours' render={() => <NavBar><Tours /></NavBar>} />
      <Route basename={BASELINE_URL} path='/transport' render={() => <NavBar><Transport /></NavBar>} />
      <Route basename={BASELINE_URL} path='/areas' render={() => <NavBar><Areas /></NavBar>} />
      <Route basename={BASELINE_URL} exact path='/offers' render={() => <NavBar><Offers /></NavBar>} />
      <Route basename={BASELINE_URL} path='/information' render={() => <NavBar><Information /></NavBar>} />
      {/* <Route path='/news' render={() => <NavBar><News /></NavBar>} /> */}
      {/* <Route basename={BASELINE_URL} path='/pdfviewer' render={() => <PDFViewer />} /> */} */}

      {/* <Route path='/SignUp' render={() => <NavBar><SignUp /></NavBar>} /> */}
      <Route exact path='/' render={() => <NavBar><App /></NavBar>} />
      <Route path='/home' render={() => <NavBar><Home /></NavBar>} />
      <Route path='/flights' render={() => <NavBar><Flights /></NavBar>} />
      <Route path='/accommodation' render={() => <NavBar><Accommodation /></NavBar>} />
      <Route path='/tours' render={() => <NavBar><Tours /></NavBar>} />
      <Route path='/transport' render={() => <NavBar><Transport /></NavBar>} />
      <Route path='/areas' render={() => <NavBar><Areas /></NavBar>} />
      <Route exact path='/offers' render={() => <NavBar><Offers /></NavBar>} />
      <Route path='/information' render={() => <NavBar><Information /></NavBar>} />
      {/* <Route path='/news' render={() => <NavBar><News /></NavBar>} /> */}
      <Route path='/pdfviewer' render={() => <PDFViewer />} />
    </Switch>
  </Router>,
  document.getElementById('app')

);
export { BASELINE_URL, BACK_URL };
// Hot - reload - Speed things up
// module.hot.accept();
