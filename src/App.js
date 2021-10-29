import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { ChakraProvider } from "@chakra-ui/react"
import React from 'react'



function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <div className="App-Content">
          <Home />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
