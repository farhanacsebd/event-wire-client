import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Decoration.css'
import { Container, Typography } from '@mui/material';
const Decoration = () => {

    return (

        <Container>
            <Box sx={{ flexGrow: 1 }} style={{ paddingBottom: 30 }}>
                <h1 style={{ marginTop: 50, marginBottom: 40 }}>Event Management</h1>
                <Grid style={{ marginBottom: 50 }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6}>
                        <img style={{ width: "100%", height: "400px" }} src="https://cdn0.weddingwire.in/article/1886/original/1280/jpg/16881-indian-wedding-decorations-anoop-photography-indian-wedding-decorations-decorations-for-your-big-wedding-day.jpeg" alt="" />
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>

                        <Typography>
                            <img style={{ width: "75%", height: "200px" }} src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/655/034/new_large/shades3.jpg?1547020666" alt="" />
                        </Typography>
                        <Typography variant="h5" component="div">
                            NEW ERA OF
                            EVENT MANAGEMENT
                        </Typography>
                        <Typography>

                            Creative Wedding Planner & Event Management established a new era in wedding planning and event management service in Bangladesh with quality and excellence.
                        </Typography>






                    </Grid>
                </Grid>



                <Grid style={{ marginBottom: 150 }} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={4} md={6}>
                        <Typography variant="h5" component="div">
                            Wedding Comes Once in a Lifetime. It’s an historic day in the lives of the bride and groom, which is why we are so passionate and dedicated to create an unforgettable experience for them.
                        </Typography>
                        <Typography>

                            Make it Memorable
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <img style={{ width: "100%", height: "400px" }} src="https://i.pinimg.com/736x/5f/ab/7d/5fab7d37d20976bc17919302f4dcaf35.jpg" alt="" />
                    </Grid>

                </Grid>
            </Box>
        </Container>
    );
};

export default Decoration;