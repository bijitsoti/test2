import { Favorite, FavoriteBorder } from '@mui/icons-material'
import { Grid, Box, Typography, Link, List, ListItem, FormGroup, FormControlLabel, Checkbox, Card, CardMedia, CardContent, Button, CardActions, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import Cards from '../components/Card'
import Navbar from '../components/layout/Navbar'

const Deals = () => {
  return (
    <>
      <Navbar />
      {/* <Container maxWidth='sm'>
    <Box sx={{backgroundColor:'info.light'}}>
Hello
</Box> 
    </Container>
    */}
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Box>
            <Typography variant='h4' color='success.main' fontWeight={'bold'} sx={{ textDecoration: 'underline' }}>Deals</Typography>
            <List>
              <ListItem>
                <Link href='#'>
                  <Typography variant='button' color='secondary' fontSize={20}>Most Popular</Typography></Link>
              </ListItem>
              <ListItem>
                <Link href='#'>
                  <Typography variant='button' color='warning' fontSize={20}>Flash Sales</Typography></Link>
              </ListItem>
              <ListItem>
                <Link href='#'>
                  <Typography variant='button' color='error' fontSize={20}>Deals of the Day</Typography></Link>
              </ListItem>
            </List>
            <Typography variant='h4' color='success.main' fontWeight={'bold'} sx={{ textDecoration: 'underline' }}>Departments</Typography>
            <FormGroup>
              <FormControlLabel control={<Checkbox size='large' color='success' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Mobiles" />
              <FormControlLabel control={<Checkbox size='large' color='success' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="laptops" />
              <FormControlLabel control={<Checkbox size='large' color='success' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="furnitures" />
              <FormControlLabel control={<Checkbox size='large' color='success' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="home" />
              <FormControlLabel control={<Checkbox size='large' color='success' icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="fitness" />
            </FormGroup>
            <Typography variant='h4' color='success.main' fontWeight={'bold'} sx={{ textDecoration: 'underline' }}>Prices</Typography>

            <RadioGroup>
              <FormControlLabel control={<Radio size='large' color='success' icon={<FavoriteBorder />} checkedIcon={<Favorite />} name='prices' value='0' />} label="Upto Rs. 1000" />
              <FormControlLabel control={<Radio name='prices' value='1' />} label="Rs. 1000-Rs.10000" />
              <FormControlLabel control={<Radio name='prices' value='2' />} label="Rs.10000-Rs50000" />
              <FormControlLabel control={<Radio name='prices' value='3' />} label="Rs.50000-Rs.100000" />
              <FormControlLabel control={<Radio name='prices' value='4' />} label="Above Rs.100000" />
            </RadioGroup>

          </Box>
        </Grid>
        <Grid item xs={8} padding={5}>
          <Grid container spacing={3}>
            <Grid item xs={4}>

              <Cards image="./images/product1.jpg" title='Mobile' />
            </Grid>
            <Grid item xs={4}>
            
            <Cards image="./images/laptop.jpg" title='laptop' />
            </Grid>

            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  images="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <img src="./images/product9.jpg" className="card-img-top" alt="..." />
                    Furniture
                  </Typography>
                  <Typography variant="body2" color="text.secondary">

                  </Typography>
                </CardContent>
                <CardActions>
                  <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={4}>

            </Grid>
            <Grid item xs={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  images="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <img src="./images/product4.jpg" className="card-img-top" alt="..." />
                    Fitness
                  </Typography>
                  <Typography variant="body2" color="text.secondary">

                  </Typography>
                </CardContent>
                <CardActions>
                  <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default Deals