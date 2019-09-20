import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-react';
import Navbar from '../src/components/navbar'
import Userpage from '../src/pages/usersVerify'
import UserV from '../src/pages/userV'
import Maps from '../src/pages/maps'

function App() {
  return (
    <div>
      <Navbar />
      {/* <UserV /> */}
      <Maps />
    </div>
  );
}

export default App;
