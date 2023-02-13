import { Delete } from '@mui/icons-material';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Container } from '@mui/system'
import React from 'react'
import Navbar from '../components/layout/Navbar'

const Cart = () => {
    function createData(name, image, price, quantity
      ) {
        return {name, image, price, quantity };
      }
      
      const rows = [
        createData('smsung galaxy A04', "https://static-01.daraz.com.np/p/4e025f373b46c23387c6e9b60ff7eb0e.jpg","Rs.13,499",4),
        createData('Redmi Note 11',"https://static-01.daraz.com.np/p/41d43bc8c31de6d900494b91074ba468.jpg" ,"Rs.38,499",3),
        createData('Redmi A1',"https://static-01.daraz.com.np/p/1880dffde5a5d6ab0d305e84a560ea4b.jpg","Rs.11,999",10),
       
      ];
  return (
    <>
    <Navbar/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No.</TableCell>
            <TableCell align="center">Product image</TableCell>
            <TableCell align="center">Product info</TableCell>
            <TableCell align="center">quantity</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:hover': { backgroundColor:'silver', cursor:'pointer' } }}
            >
              <TableCell component="th" scope="row">
                {i+1}
              </TableCell>
              <TableCell align="center">
                <img src={row.image} style={{height:'120px'}}/>
              </TableCell>
            <TableCell align="center">
                <Typography variant='h6'>{row.name}</Typography>
                <Typography variant='h6'>{row.price}</Typography>
                </TableCell>
            <TableCell align="center">{row.quantity}</TableCell>
            <TableCell align="center">
                <Button variant='contained' color='error' startIcon={<Delete/>} endIcon={<Delete/>}>Delete</Button>
            </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Container>

    </Container>
    </>
  )
}

export default Cart