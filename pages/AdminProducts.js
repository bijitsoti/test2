import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../components/layout/AdminSidebar'
import Navbar from '../components/layout/Navbar'
import { getAllProduct } from '../productAPI'

const AdminProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
    getAllProduct()
    .then(data=>{
if(data.error){
    console.log(data)
}
else{
    setProducts(data)
}
    })
    .catch(err=>console.log(err)) 
    
},[])
  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-12 col-md-3'>
                <AdminSidebar product/>
            </div>
            <div className='col-sm-12 col-md-9 p-5'>
                <div className='d-flex justify-content-between'>
                <h3>Products</h3>
                <Link to='/admin/products/add' className='btn btn-warning'>Add New Product</Link>  
                </div>
                <table className='table table-hover text-center table-bordered'>
                    <thead>
                        <tr className='table-dark'> 
                            <td>S.No.</td>
                            <td>Product Image</td> 
                            <td>Product Name</td>
                            <td>Unit Price</td>
                            <td>Count in Stock</td>
                            <td>Rating</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((product,i)=>{
                                return <tr key={product._id}>
                                    <td>{i+1}</td>
                                    <td>
                                        <img src={'${API}/${product.product_image}'} alt = {product.product_name} style = {{height: '150px'}}/>
                                    </td>
                                    <td>{product.product_name}</td>
                                    <td>Rs.{product.product_price}</td>
                                    <td>{product.count_in_stock}</td>
                                    <td>{product.rating}</td>
                                    <td>
                                        <div className='btn-group'>
                                            <button className='btn btn-warning'><i className='bi bi-pencil-square'></i></button>
                                            <button className='btn btn-danger'><i className='bi bi-trash-square'></i></button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
        </>
  )
}

export default AdminProducts