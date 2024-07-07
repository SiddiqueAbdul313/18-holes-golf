// MembershipDialog.jsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./MembershipDialog.css";

// eslint-disable-next-line react/prop-types
const MembershipDialog = ({ open, onClose, memback }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Handle email submission logic here
    console.log("Email submitted:", email);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="membership-dialog-title"
    >
      <img src={memback} alt="Membership background" className="memback" />
      <DialogTitle id="membership-dialog-title" className="dialogTitle">
        Special Offer
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="dialogContent">
        <Box sx={{ textAlign: "center", marginBottom: 2 }}>
          <Typography variant="h5" sx={{ marginBottom: 1 }}>
            50% Off Membership!
          </Typography>

          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Sign up now to get exclusive access to our golf club benefits.
          </Typography>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            className="emailField"
            required
            sx={{outline:'none'}}
          />
        </Box>
      </DialogContent>
      <DialogActions className="dialogActions">
        <Button
          onClick={handleSubmit}
          variant="contained"
          className="submitButton"
          color="success"
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MembershipDialog;
