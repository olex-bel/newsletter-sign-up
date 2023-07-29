
import { Typography, List, ListItem, ListItemIcon, ListItemText, Stack, Box, Grid  } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import illustrationDesctop from '../assets/illustration-sign-up-desktop.svg';
import illustrationMobile from '../assets/illustration-sign-up-mobile.svg';
import NewsletterSignUpForm from './NewsletterSignUpForm';

export default function NewsletterSignUp( { setEmail } ) {
    const benefits = [
        'Product discovery and building what matters',
        'Measuring to ensure updates are a success',
        'And much more!'
    ];

    return (
        <Grid 
            container 
            sx={
                { 
                    backgroundColor: 'white',
                    borderRadius: {
                        md: '5%',
                    },
                }
            }
            minHeight={
                {
                    xs: '100vh',
                    sm: 'auto',
                }
            }
            pb={
                {
                    xs: 4,
                }
            }   
        >
            <Grid item  p={{ md: 3, xs: 0 }} order={{ xs: 2, sm: 1 }}>
                <Stack 
                    spacing={1} 
                    px={
                        {
                            sm: 4,
                            xs: 3,
                        }
                    }
                    pt={
                        {
                            sm: 10,
                            xs: 4,
                        }
                    } 
                >
                    <Box 
                        sx={
                            { 
                                typography: {
                                    sm: 'h2', 
                                    xs: 'h3',
                                },
                                fontWeight: 'bold' 
                            }
                        }
                    >
                        Stay updated!
                    </Box>
                    <Typography>Join 60,000+ product managers receiving monthly updates on:</Typography>
                    <List dense={true} disablePadding={true}>
                        {benefits.map((text, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemIcon><CheckCircleIcon sx={{ color: '#FF6457'}}/></ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        })}
                    </List>
                    <NewsletterSignUpForm setEmail={setEmail} />
                </Stack>
              
            </Grid>
            <Grid item xs={12} sm p={{ sm: 3, xs: 0 }} order={{ xs: 1, sm: 2 }}>
                <Stack direction='column'>
                    <picture>
                        <source media="(max-width: 480px)" srcSet={illustrationMobile} />
                        <source media="(min-width: 800px)" srcSet={illustrationDesctop} />
                        <img  className='illustration-image' src={illustrationDesctop} alt="newsletter signup illustration" />
                    </picture>
                </Stack>
            </Grid>
        </Grid>
    )
};