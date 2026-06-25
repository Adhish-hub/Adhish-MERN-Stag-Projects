import React from 'react'
import { Routes, Route} from "react-router-dom";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />}/>
        <Route path='/contact' element = {<Contact />}/>
        <Route path='*' element = {<NotFound />}/>
      </Routes>
    </div>
  );
};

export default App