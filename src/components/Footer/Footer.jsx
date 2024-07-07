/* eslint-disable react/prop-types */
import "./Footer.css";
import { Button, TextField } from "@mui/material";

function Footer({
  title,
  description,
  newsletterPlaceholder,
  searchPlaceholder,
  menuLinks,
  servicesLinks,
  contactLinks,
  followLinks,
}) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-left">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <div className="footer-right">
            <h2>Newsletter</h2>
            <div className="newsletter">
              <TextField
                variant="outlined"
                placeholder={newsletterPlaceholder}
                size="small"
                className="newsletter-input custom-placeholder"
              />
              <Button
                variant="contained"
                color="success"
                className="newsletter-button"
              >
                Subscribe
              </Button>
            </div>
            <h2>Search</h2>
            <div className="search">
              <TextField
                variant="outlined"
                placeholder={searchPlaceholder}
                size="small"
                className="search-input custom-placeholder"
              />
              <Button
                variant="contained"
                color="success"
                className="search-button"
              >
                Go
              </Button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-section">
            <h3>Menu</h3>
            {menuLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            {servicesLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            {contactLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            {followLinks.map((link, index) => (
              <a key={index} href={link.href}>
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
