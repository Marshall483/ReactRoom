import React from 'react';
import Header from './UI/Header.js'
import TopImage from './UI/TopImage.js'
import Body from './UI/Body.js'
import BottomFooter from './UI/BottomFooter.js'
import './App.css';


function App() {
  return (
    
    <>
      <Header />

      <main>

        <TopImage />
        <Body />
        
      </main>

      <BottomFooter />
    </>
   
  );
}

export default App;
