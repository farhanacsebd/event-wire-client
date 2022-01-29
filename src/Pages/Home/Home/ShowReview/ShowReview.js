import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import Rating from 'react-rating';
import './ShowReview.css';

const ShowReview = ({ service }) => {
    console.log(service);
    // const {service} = props;
    const { _id, name, email, description, rating } = service;
    return (
        <div data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <Card className="ratingCard" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <br />
                    <img style={{ marginTop: "10px", borderRadius: '50%' }} width='25%' src="https://www.vhv.rs/dpng/d/247-2478382_profile-contacts-icon-hd-png-download.png" alt="" />
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography style={{ fontWeight: "bold" }} variant="body2" color="text.secondary">
                            {email}
                        </Typography>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly></Rating>
                        <Typography style={{ fontWeight: "bold" }} variant="subtitle1" color="text.secondary" component="div">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default ShowReview;