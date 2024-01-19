import "./Hero.css";
import hand_icon from "../AssetsFolder/hand_icon.png";
import arrow from "../AssetsFolder/arrow.png";
import hero_image from "../AssetsFolder/hero_image.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p> for everyone</p>
        <div className="hero-latest-btn">
          <div>latest collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
export default Hero;
