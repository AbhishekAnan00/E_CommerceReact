import "./Footer.css";
import logo_big from "../AssetsFolder/logo_big.png";
import instagram_icon from "../AssetsFolder/instagram_icon.png";
import pintester_icon from "../AssetsFolder/pintester_icon.png";
import whatsapp_icon from "../AssetsFolder/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo_big} alt="" />
        <p>SHOPPING</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;
