/* eslint-disable react/prop-types */
import { Box, Button, Typography, TextField, IconButton } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Link } from "react-router-dom";
import useStore from '../../store';
import "./Content.css";

function Content() {
  const homeData = useStore((state) => state.homeData);
  const isEditing = useStore((state) => state.isEditing);
  const setIsEditing = useStore((state) => state.setIsEditing);
  const setHomeData = useStore((state) => state.setHomeData);

  const { title, description, btn, bgImg } = homeData[0];

  const typographyStyles = {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: 600,
  };

  const handleTitleChange = (event) => {
    setHomeData({ title: event.target.value });
  };

  const handleDescriptionChange = (event) => {
    setHomeData({ description: event.target.value });
  };

  const handleButtonChange = (event) => {
    setHomeData({ btn: event.target.value });
  };

  const handleBgImgChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setHomeData({ bgImg: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <Box className="background-container" >
        <img src={bgImg || "https://images.unsplash.com/photo-1514480573427-1f96cbed6a27?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="background" className="background-image" />
        <Box className="overlay"></Box>
        <Box className="text-overlay">
          <Box className="edit-button" >
            <IconButton onClick={toggleEditMode} color="primary" >
              {isEditing ? <SaveIcon /> : <EditIcon />}
            </IconButton>
          </Box>
          {isEditing ? (
            <TextField
              variant="outlined"
              value={title}
              onChange={handleTitleChange}
              sx={{ ...typographyStyles, color: 'white' }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              className="title"
            />
          ) : (
            <Typography className="title" variant="h4" sx={typographyStyles}>
              {title}
            </Typography>
          )}
          {isEditing ? (
            <TextField
              value={description}
              onChange={handleDescriptionChange}
              sx={{ ...typographyStyles, color: 'white' }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              className="description"
              multiline
            />
          ) : (
            <Typography className="description" variant="body2" sx={typographyStyles}>
              {description}
            </Typography>
          )}
          {isEditing ? (
            <TextField
              variant="outlined"
              value={btn}
              onChange={handleButtonChange}
              sx={{ zIndex: 1, marginTop: "20px", color: "white" }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              className="exploreBtn"
            />
          ) : (
            <Button
              variant="contained"
              color="success"
              sx={{ zIndex: 1, marginTop: "20px", color: "white" }}
              className="exploreBtn"
              component={Link}
              to="/explore"
            >
              {btn}
              <CallMadeIcon fontSize="small" />
            </Button>
          )}
          {isEditing && (
            <TextField
              type="file"
              onChange={handleBgImgChange}
              sx={{ marginTop: "20px", color: "white", width: '100%' }}
              InputProps={{
                style: { color: 'white' },
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white',
                    },
                    '&:hover fieldset': {
                      borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'white',
                    },
                  },
                },
              }}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              className="bgImg"
              placeholder="Upload background image"
            />
          )}
        </Box>
      </Box>
    </>
  );
}

export default Content;
