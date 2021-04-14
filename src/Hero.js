import "./Hero.css";
import star_ratings from "./images/star_ratings.png";

const Hero = ({ image, card_data }) => {
  const { title, rating, price } = card_data;
  return (
    <div className="hero__card">
      <img src={image} className="hero__image" />
      <div className="hero__info">
        <div className="hero__title">{title}</div>
        <img src={star_ratings} className="hero__ratings" />
        <div className="hero__footer">
          <div className="pricing">{price}</div>
          <div className="book-room">BOOK ROOM</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
