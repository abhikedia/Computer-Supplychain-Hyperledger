import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-react';
import Navbar from '../src/components/navbar'
import UserV from '../src/pages/userV'
import Maps from '../src/pages/maps'
import Manufacturer from '../src/pages/manufacturer'

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <UserV /> */}
      {/* <Maps /> */}
      <Manufacturer />
    </div>
  );
}

export default App;
