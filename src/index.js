import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import UserV from '../src/pages/userV'
import Manufacturer from '../src/pages/manufacturer'
import Checkpoint1 from '../src/pages/checkpoint1'
import Checkpoint2 from '../src/pages/checkpoint2'
import Gmaps from '../src/pages/maps'
import StartPage from '../src/pages/StartPage'
import Dealers from '../src/pages/dealers'
import * as serviceWorker from './serviceWorker';



const routing = (
  <Router>
    <div>
      <Route exact path="/user" component={UserV} />
      {/* <Route exact path="/maps" component={Maps} /> */}
      <Route exact path="/manufacturer" component={Manufacturer} />
      <Route exact path="/checkpoint1" component={Checkpoint1} />
      <Route exact path="/checkpoint2" component={Checkpoint2} />
      <Route exact path="/dealers" component={Dealers} />
      <Route exact path="/maps" component={Gmaps} />
      <Route exact path="/startpage" component={StartPage} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
