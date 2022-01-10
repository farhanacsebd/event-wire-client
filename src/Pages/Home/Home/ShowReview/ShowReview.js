import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Box, Typography } from '@mui/material';
import Rating from 'react-rating';
import './ShowReview.css';

const ShowReview = ({ service }) => {
    console.log(service);
    // const {service} = props;
    const { _id, name, email, description, rating } = service;
    return (
        <Card className="review-transform rating" sx={{ boxShadow: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography className='textColor' component="div" variant="h5">
                        {name}
                    </Typography>
                    <Typography component="div" className='textColor' variant="h6">
                        {email}
                    </Typography>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star icon-color"
                        fullSymbol="fas fa-star icon-color"
                        readonly></Rating>
                    <Typography variant="subtitle1" component="div" className='textColor'>
                        {description}
                    </Typography>
                </CardContent>

            </Box>

        </Card>
    );
};

export default ShowReview;