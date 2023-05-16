import React from 'react'

// import Article from './components/article/Article'
import { Brand, CTA, Navbar } from './components'
import {
  Blog,
  Features,
  Possibility,
  WhatGPT3,
  Header,
  Footer,
} from './containers'

import './app.css'
function App() {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
