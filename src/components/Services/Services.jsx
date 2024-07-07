import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";

import "./Services.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { servicesData } from "../../../Data/servicesData";

export default function Services() {
    return (
      <>
        <Box className='services-container'>
          <Typography variant="h4" className="services-heading">Our Services</Typography>
          <Typography variant="body1" className="services-description">Description about your services.</Typography>
  
          <Grid container spacing={3} className='main-services'>
            {servicesData.map((service) => (
              <Grid item  sm={6} md={4} lg={3} key={service.id}>
                <Card className="service-card">
                  <CardMedia
                    component="img"
                    alt={service.title}
                    height="240"
                    image={service.image}
                  />
                  <CardContent className='parent-card'>
                    <Typography variant="h5">
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                  <CardActions className='learn-more-btn'>
                    <Button size="small" color="success">Learn More</Button>
                    <ArrowRightAltIcon color="success"/>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </>
    );
  }
  