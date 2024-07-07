/* eslint-disable react/prop-types */
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./About.css";
import Experts from "../Experts/Experts";


function About({ backgroundImage, sections,expertData }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box className="about-container">
      {/* Responsive Image Section */}|
      <Box
        className={`responsive-image-section ${isSmallScreen ? "small" : ""}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Box className="overlay">
          <Typography
            className={`overlay-text ${isSmallScreen ? "small" : "large"}`}
          >
            About Us
          </Typography>
        </Box>
      </Box>

      {/* Additional Content */}
      <Box className="additional-content">
        {/* Map over sections to render each section */}
        {sections.map((section, index) => (
          <Box
            className={`section ${index % 2 === 0 ? "" : "reverse"}`}
            key={index}
          >
            <Box className="text-container">
              <Typography variant="h4" className="title">
                {section.title}
              </Typography>
              <Typography variant="body1" className="desc">
                {section.description}
              </Typography>
            </Box>
            <Box
              className="image-container"
              style={{ backgroundImage: `url(${section.image})` }}
            />
          </Box>
        ))}
      </Box>
      <Box >
        <Experts expertData={expertData}/>
      </Box>
    </Box>
  );
}

export default About;
