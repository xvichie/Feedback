import './App.scss';

import 'reactjs-popup/dist/index.css';

import Logo from './images/medi-logo.png';

import { useState } from 'react';

import SliderComponent from './Components/Slider/SliderComponent';
import Faces from './Components/Faces/Faces';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// LOGO COLOR THEME
// LOGO COLOR THEME
//LOGO COLOR THEME



function App() {
  return (
    <div className="App">
      <Header logo={Logo}></Header>
      <Faces></Faces>
      {/* <SliderComponent></SliderComponent> */}
      <Footer color={"#9364CC"}></Footer>
    </div>
  );
}

export default App;
