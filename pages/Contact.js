import { Button, TextField, Typography,Box } from '@mui/material'
// import { Box } from '@mui/system'
import React from 'react'
import Navbar from '../components/layout/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <Box display={'flex'} padding='25px' sx={{ backgroundColor: 'aliceblue' }}>
                <Box width={'50%'} padding='25px' sx={{ backgroundColor: 'lightskyblue' }} borderRadius='10px'>
                    <Typography variant='h5'>Contact form</Typography>
                    <TextField label='email' placeholder='enter email here' fullWidth required helperText='enter email' />
                    <TextField label='email' placeholder='enter email here' fullWidth />
                    <TextField label='email' fullWidth required multiline maxRows={3} minRows={3} />
                    <Button variant='contained' fullWidth>Submit</Button>
                </Box>
                <Box width={'50%'} padding='25px'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2402493600957!2d85.31271801453839!3d27.709867531989186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97e148bf84dad344!2sAptech%20Computer%20Education!5e0!3m2!1sen!2snp!4v1672742087423!5m2!1sen!2snp" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Box>
            </Box>
        </>
    )
}

export default Contact