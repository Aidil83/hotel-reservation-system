import "./App.css";
import Hero from "./Hero";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <h1>Let's Find Your Rooms</h1>
      <div className="hero">
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </div>
      <Footer />
    </div>
  );
}

export default App;
