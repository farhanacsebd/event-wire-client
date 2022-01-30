import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Decoration.css'
import { Container, Typography } from '@mui/material';
const Decoration = () => {

    return (

        <Container>
            <Box sx={{ flexGrow: 1 }} style={{ paddingBottom: 30 }}>
                <h1 style={{ fontSize: "3rem", marginTop: 50, marginBottom: 80 }}>Event Management</h1>
                <Grid style={{ marginBottom: 50 }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6}>
                        <div data-aos="flip-left">
                            <img style={{ width: "100%", height: "400px" }} src="https://www.romantichomes.com/wp-content/uploads/2014/03/VillaSevillano_Wedding_2013_7.jpg" alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>

                        <div data-aos="zoom-in-left">
                            <Typography>
                                <img style={{ width: "75%", height: "200px" }} src="https://i.pinimg.com/736x/9b/62/b0/9b62b01dda66404dccee6d2729d00d5f--nightime-wedding-wedding-wall-decorations.jpg" alt="" />
                            </Typography>
                        </div>
                        <div data-aos="fade-up"
                            data-aos-duration="3000">
                            <Typography variant="h5" component="div">
                                NEW ERA OF <br />
                                EVENT MANAGEMENT
                            </Typography>
                            <Typography>

                                Creative Wedding Planner & Event Management established a new era <br /> in wedding planning and event management service <br /> in Bangladesh with quality and excellence.
                            </Typography>
                        </div>






                    </Grid>
                </Grid>



                <Grid style={{ marginBottom: 150 }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={4} md={6}>
                        <div data-aos="fade-up"
                            data-aos-duration="3000">
                            <Typography variant="h5" component="div">
                                <br /><br /><br />

                                Wedding Comes Once in a Lifetime. It’s an historic <br /> day in the lives of the bride and groom,<br /> which is why we are so passionate and dedicated <br /> to create an unforgettable experience for them.

                            </Typography>
                            <Typography>

                                Make it Memorable
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <div data-aos="flip-right"> <img style={{ width: "100%", height: "400px" }} src="https://cosmopolitanevents.com.au/wp-content/uploads/2021/08/indian-wedding-venue-3.jpg" alt="" /></div>
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Decoration;