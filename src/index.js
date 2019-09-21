import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import UserV from '../src/pages/userV'
import Maps from '../src/pages/maps'
import Manufacturer from '../src/pages/manufacturer'
import Checkpoint from '../src/pages/checkpoints'
import Checkpoint2 from '../src/pages/checkpoint2'
import * as serviceWorker from './serviceWorker';


const routing = (
  <Router>
    <div>
      <Route exact path="/user" component={UserV} />
      <Route exact path="/maps" component={Maps} />
      <Route exact path="/manufacturer" component={Manufacturer} />
      <Route exact path="/checkpoints" component={Checkpoint} />
      <Route exact path="/checkpoint2" component={Checkpoint2} />
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
