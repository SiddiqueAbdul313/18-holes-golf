/* eslint-disable react/prop-types */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  //   Box,
} from "@mui/material";
import React from "react";
import "./Experts.css";

function Experts({ expertData }) {
  // eslint-disable-next-line no-unused-vars
  const [spacing, setSpacing] = React.useState(2);

  const typographyStyles = {
    fontFamily: "Quicksand, sans-serif",
    fontWeight: 600,
  };

  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Typography variant="h3" sx={{ margin: "auto", ...typographyStyles }}>
          Meet Our Experts
        </Typography>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {expertData.map((expert) => (
              <Grid key={expert.id} item>
                <Card className="main-card">
                  <CardActionArea className="card-action">
                    <CardMedia
                      component="img"
                      height="auto"
                      image={expert.image}
                      alt={expert.alt}
                      className="card-image"
                    />
                    <CardContent className="card-content">
                      <Typography variant="h5" sx={typographyStyles}>
                        {expert.name}
                      </Typography>
                      <Typography variant="body2" sx={typographyStyles}>
                        {expert.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Experts;
