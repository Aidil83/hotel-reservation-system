import "./App.css";
import Footer from "./Footer";
import curtain_hotel from "./images/curtain_hotel.jpg";
import star_ratings from "./images/star_ratings.png";
function App() {
  return (
    <div className="App">
      <h1>Let's Find Your Rooms</h1>
      <div className="hero">
        <div className="hero__card">
          <img src={curtain_hotel} className="hero__image" />
          <div className="hero__info">
            <div className="hero__title">The Curtain Hotel</div>
            <img src={star_ratings} className="hero__ratings" />
            <div className="hero__footer">
              <div className="pricing">$100</div>
              <div className="book-room">BOOK ROOM</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
