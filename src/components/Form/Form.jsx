import { TextField, Button, Grid, Typography } from "@mui/material";
import "./Form.css";

function Form() {
  return (
    <>
      <form className="form-container">
        <Typography variant="h4" className="form-title">
          Book Now
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="email"
              label="Email Address"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="phone"
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="numberOfPlayers"
              label="Number of Players"
              type="number"
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="date"
              label="Date"
              type="date"
              variant="outlined"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="orderNotes"
              label="Order Notes"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="success">
          Book Now
        </Button>
      </form>
    </>
  );
}

export default Form;
