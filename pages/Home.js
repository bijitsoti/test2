import React from 'react'
import Navbar from '../components/layout/Navbar'
// import footer from '../components/layout/Footer'
import Carousel from '../components/Carousel' 
import Categories from '../components/Categories'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Categories/>
    {/* <Footer/> */}
    </>
  )
}

export default Home