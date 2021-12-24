import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import UpDownNav from './components/UpDownNav';
import Intro from './components/Intro';
// import SmoothScroll from './components/SmoothScroll/SmoothScroll';



function App() {
  var drawRipple = function (ev) {
    var node = document.querySelector(".ripple");
    var newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    newNode.style.left = ev.clientX - 5 + "px";
    newNode.style.top = ev.clientY - 5 + "px";
    node.parentNode.replaceChild(newNode, node);
  };

  //Ripple Triggers
  window.addEventListener("click", drawRipple);
  return (
    <ChakraProvider>
      <div className='ripple'/>
      <Intro/>
      <div className="App">
        <Navbar />
        <UpDownNav />
        <div className="App_Content">
          <Home />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
