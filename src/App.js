import "./App.css";
import Hero from "./Hero";
import Footer from "./Footer";
import curtain_hotel from "./images/curtain_hotel.jpg";
import albert_vincent_hotel from "./images/albert_vincent_hotel.jpg";
import dana_hotel from "./images/dana_hotel.jpg";
import olexandr_hotel from "./images/olexandr_hotel.jpg";
import venice_hotel from "./images/venice_hotel.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Let's Find Your Rooms</h1>
      <div className="hero">
        <Hero image={curtain_hotel} />
        <Hero image={albert_vincent_hotel} />
        <Hero image={dana_hotel} />
        <Hero image={olexandr_hotel} />
        <Hero image={venice_hotel} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
