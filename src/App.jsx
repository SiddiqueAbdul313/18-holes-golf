import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import { expertData, sections } from "../Data/dummyData";
import Form from "./components/Form/Form";
import { footerData } from "../Data/footerData";
import Services from "./components/Services/Services";
import { homeData } from "../Data/homeData";
import News from "./components/News/News";
import { useState } from "react";
import useStore from "./store";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElPages, setAnchorElPages] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenPagesMenu = (event) => {
    setAnchorElPages(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClosePagesMenu = () => {
    setAnchorElPages(null);
  };
  const isEditing = useStore((state) => state.isEditing);
  const setIsEditing = useStore((state) => state.setIsEditing);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const AboutBackground =
    "https://cdn.pixabay.com/photo/2015/05/28/10/12/golf-787826_960_720.jpg";
  const NewsVideo =
    "https://cdn.pixabay.com/video/2022/10/21/135797-764361898_large.mp4";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header
          anchorElNav={anchorElNav}
          anchorElPages={anchorElPages}
          handleOpenNavMenu={handleOpenNavMenu}
          handleOpenPagesMenu={handleOpenPagesMenu}
          handleCloseNavMenu={handleCloseNavMenu}
          handleClosePagesMenu={handleClosePagesMenu}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Content
                  homeData={homeData}
                  toggleEditMode={toggleEditMode}
                  isEditing={isEditing}
                />
                <Footer {...footerData} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <About
                  sections={sections}
                  backgroundImage={AboutBackground}
                  expertData={expertData}
                />
                <Footer {...footerData} />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Box className="form-section">
                  <Form />
                </Box>
                <Footer {...footerData} />
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <About
                sections={sections}
                backgroundImage={AboutBackground}
                expertData={expertData}
              />
            }
          />
          <Route
            path="/services"
            element={
              <>
                <Services />
                <Footer {...footerData} />
              </>
            }
          />
          <Route path="/news" element={<News NewsVideo={NewsVideo} />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
