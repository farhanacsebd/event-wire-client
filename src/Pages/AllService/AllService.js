import React from 'react';
import './AllService.css';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import './AllService.css'

const AllService = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <Card className="service-cart" sx={{ maxWidth: 345, boxShadow: 2, marginBottom: 10 }}>
            <img style={{ height: "250px" }} src={img} />
            <Box sx={{ bgcolor: 'text.disabled', color: 'primary.main' }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>

                    <Typography variant="p" color="text.secondary" sx={{ color: "black" }}>
                        Starting Cost : ₹{price}tk
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/booking/${_id}`} style={{ padding: "3px", margin: "5px", textDecoration: "none" }}>
                        <Button variant="outlined" color="error">
                            Booking Now
                        </Button>
                    </Link>


                </CardActions>
            </Box>
        </Card>
    );
};

export default AllService;