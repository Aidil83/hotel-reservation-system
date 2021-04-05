import "./App.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <h1>Let's Find Your Room</h1>
      <div className="hero">
        <div className="hero__image"></div>
        <div className="hero__title">The Curtain Hotel</div>
        <div className="hero__ratings">* * * * *</div>
        <div className="hero__footer">
          <div className="pricing">$100</div>
          <div className="book-room">BOOK ROOM</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
