
import { Stack, Box, Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CustomButton from "./CustomButton";

export default function NewsletterSignUpConfirmation({ email, onDismissEmail }) {
    return (
        <Stack 
            direction='column'
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
            p={6}
            maxWidth={500}
        >
            <CheckCircleIcon sx={{ color: '#FF6457'}} fontSize="large"/>
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
                py={2}
            >
                Thanks for subscribing!
            </Box>
            <Typography 
                sx={
                    {
                        mb: {
                            xs: 30,
                            sm: 2
                        }
                    }
                }
            >
                A confirmation email has been sent to <Box component='span' fontWeight='bold'>{email}</Box>. 
                Please open it and click the button inside to confirm your subscription.
            </Typography>
            <Box>
                <CustomButton text='Dismiss message' onClick={onDismissEmail} />
            </Box>
        </Stack>
    );
}