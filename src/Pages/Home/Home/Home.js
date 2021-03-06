import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Decoration from './Decoration/Decoration';
import NewsFeed from './NewsFeed/NewsFeed';
import ShowReviews from './ShowReviews/ShowReviews';

const Home = () => {


    return (

        <div>
            <Banner />
            <Services></Services>
            <ShowReviews></ShowReviews>
            <NewsFeed></NewsFeed>
            <Decoration></Decoration>


        </div>

    );
};

export default Home;