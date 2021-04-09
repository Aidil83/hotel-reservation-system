import "./Hero.css";
import curtain_hotel from "./images/curtain_hotel.jpg";
import star_ratings from "./images/star_ratings.png";

const Hero = () => {
  return (
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
  );
};

export default Hero;
