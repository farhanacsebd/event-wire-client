import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Decoration from './Decoration/Decoration';
import ShowReviews from './ShowReviews/ShowReviews';

const Home = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])

    return (
        <div>
            {
                services.length ? <div>
                    <Banner />
                    <Services></Services>
                    <ShowReviews></ShowReviews>
                    <Decoration></Decoration>

                </div> : <CircularProgress color="secondary" />
            }
        </div>
    );
};

export default Home;