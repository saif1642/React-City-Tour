import React from 'react';
import './App.scss';
import Navbar from '../src/components/navbar/Navbar';
import TourList from './components/tourlist';

function App() {
  return (
   <React.Fragment>
     <Navbar />
     <TourList />
   </React.Fragment>
  );
}

export default App;
