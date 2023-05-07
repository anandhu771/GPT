import React from 'react';
import { Article, Brand, CTA, Feature, NavBar } from './Components'; 
import { Blog, Footer, Header, Features, Possibility, WhatGPT3 } from './Containers';
import './App.css'

function App(){

  return(
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;
