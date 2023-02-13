import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Firstpage } from "./First"
import Home from "./pages/Home"
import Second from "./Second"
import Footer from './components/layout/Footer'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Deals from "./pages/Deals"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Counter from "./hooks/Counter"
import Info from "./hooks/Info"
import DataFetch from "./hooks/DataFetch"
import Counter2 from "./redux/Counter2"
import EmailConfirmation from "./pages/EmailConfirmation"
import ForgetPassword from "./pages/ForgetPassword"
import ResetPassword from "./pages/ResetPassword"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import AdminCategory from "./pages/Admin/AdminCategory"
import AdminProducts from "./pages/AdminProducts"
import AddProduct from "./pages/Admin/AddProduct"

const MyRoutes=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/first' element={<Firstpage/>}/>
            <Route path='/second' element={<Second/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path='/signin' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/deals' element={<Deals/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/contact' element={<Contact/>}/>

            <Route path='/emailverification/:token' element={<EmailConfirmation/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>

        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        
        <Route path='/admin/categories' element={<AdminCategory/>}/>

        <Route path='/admin/products' element={<AdminProducts/>}/>

        <Route path='/admin/products/add' element={<AddProduct/>}/>

            {/* hooks */}
            <Route path='/counter' element={<Counter/>}/>
            <Route path='/info' element={<Info/>}/>
            <Route path='/datafetch' element={<DataFetch/>}/>
            {/* redux  */}
            <Route path='/count' element={<Counter2/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    )
}
export default MyRoutes