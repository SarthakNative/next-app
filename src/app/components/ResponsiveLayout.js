'use client';

import React from 'react';
import { Card, CardContent, Typography, Grid, Box, List, ListItem, ListItemText } from '@mui/material';

const ResponsiveLayout = () => {
    const responsibilities = [
        "Responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications, and striving to create visually appealing sites that feature user-friendly design and clean navigation",
        "Work on UI, cross-browser compatibility, general web functions, and standards",
        "Working with web applications and programming languages such as Nextjs, Reactjs and API's",
        "Work in multidisciplinary team with other professionals such as back-end developers and web designers",
        "Key skills: Reactjs, Nextjs, MUI, Socket.io, Axios, Error Handling, Team Work"
    ];

    const aboutMe = `           I am Sarthak Tiwari, currently an Associate Software Developer at Pabbly, a leading product-based company in Bhopal. With a comprehensive skill set and hands-on experience, I specialize in full-stack development, encompassing end-to-end processes from development to deployment within the MERN stack.

                                My expertise includes working proficiently with tools and technologies such as Ubuntu, REST APIs, AWS EC2, Bootstrap, Git, GitHub, and the MVC architecture. Leveraging my skills, I have contributed to building robust, scalable, and user-centric applications. My ability to adapt quickly to new technologies and collaborate effectively with cross-functional teams has enabled me to deliver high-quality solutions.

                                I am enthusiastic about applying my technical expertise and problem-solving abilities to contribute meaningfully to your organization. I am confident my experience aligns with the demands of this role, and I am excited about the opportunity to bring value to your team.

                                I would be delighted to discuss how my skills and experiences align with your organization’s goals. Thank you for considering my application, and I look forward to the opportunity to connect.`
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3} />

                <Grid item xs={12} md={5}>
                    <Card sx={{
                        height: '700px',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'auto'
                    }}>
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Detrator
                            </Typography>
                            <Typography variant="body1" component="div">
                                This application is an assignment provided by Detrator.
                            </Typography>
                            <Typography variant="body1" component="div">
                                Following is the Job description.
                                We are hiring for the position of Front End Web Developer Intern. (Reactjs/Nextjs)
                            </Typography>
                            <Typography variant="h6" component="div" gutterBottom sx={{ marginTop: '10px' }}>
                                Day-to-day responsibilities : -
                            </Typography>

                            <List>
                                {responsibilities.map((responsibility, index) => (
                                    <ListItem key={index}>
                                        <ListItemText
                                            primary={responsibility}
                                            primaryTypographyProps={{
                                                style: { wordBreak: 'break-word' }
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                            <Typography variant="body1" component="div">
                                This is a remote job opportunity providing flexible shift, work from home,
                                Job Types: Full-time, Part-time, Fresher, Internship
                                Contract length: 3 months
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Card sx={{
                        height: '600px',
                        display: 'flex',
                        flexDirection: 'column',
                        backgroundColor: '#424242',
                        color: 'white',
                        overflow: 'auto' // Add this to handle overflow
                    }}>
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Sarthak Tiwari
                            </Typography>
                            <Typography
                                variant="body1"
                                component="div"
                                sx={{
                                    wordBreak: 'break-word',
                                    whiteSpace: 'pre-wrap'
                                }}
                            >
                                {aboutMe}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ResponsiveLayout;