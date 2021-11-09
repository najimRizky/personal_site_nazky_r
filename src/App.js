import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import UpDownNav from './components/UpDownNav';
import Intro from './components/Intro';
import SmoothScroll from './components/SmoothScroll/SmoothScroll';



function App() {
  return (
    <ChakraProvider>
      <Intro/>
      <div className="App">
        <Navbar />
        <UpDownNav />
        <div className="App_Content">
        <SmoothScroll>
          <Home />
        </SmoothScroll>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
