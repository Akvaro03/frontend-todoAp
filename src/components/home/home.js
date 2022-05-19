import React from 'react'
import '../../App.css';
import waves from '../../img/waves.svg';
import { Header } from '../../common';
import { StartUse, TextStart, WhyMe } from '../index';
function Home() {
  return (
    <div className="App" >
      
      <div className="divContenedor">
        <Header />
        <div className="bodyStart">
          <TextStart />
        </div>
        <img className="waves" src={waves} alt="hola"></img>
      </div>
      
      <WhyMe />
      
      <StartUse />
    </div>

  );
}

export default Home;
