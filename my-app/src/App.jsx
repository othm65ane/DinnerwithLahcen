import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Components/HeroSection/Home";
import About from "./components/About";
import Classes from "./Components/Classes";
import Events from "./Components/Events ";
import Sh from "./Components/Classes0/Sh";
import Footer from "./components/Footer";
import PrivateChef from "./components/Classes0/PrivateChef";
// import Contact from "./components/Contact";
import { Routes  , Route , useLocation } from "react-router-dom";




const App = () => {
  return (
    <div>
      <Navbar />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}  />
        <Route path="about" element={<About />}  />
        <Route path="classes" element={<Classes />}  />
        <Route path="event" element={<Events />}  />
        <Route path="sh" element={<Sh />}  />
        <Route path="private" element={<PrivateChef />}  />
        </Routes>
      <Footer />
    </div>
  );
};

export default App;