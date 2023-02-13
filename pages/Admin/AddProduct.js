import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../categoryAPI'
import AdminSidebar from '../../components/layout/AdminSidebar'
import Navbar from '../../components/layout/Navbar'

const AddProduct = () => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        getAllCategories()
    .then(data=>{
if(data.error){
    console.log(data)
}
else{
    setCategories(data)
}
    })
    
    
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
            <h3>AddNewProduct</h3>
            <form>
                <label htmlFor='product_name'>Product Name</label>
                <input type={'text'} id='product_name' name={'product_name'} className='form-control'/>

                <label htmlFor='product_price'>Product Price</label>
                <input type={'number'} id='product_price' name={'product_price'} className='form-control'/>

                <label htmlFor='product_description'>Description</label>
                <textarea rows={3} className='form-control' id='product_description'/>

                <label htmlFor='Count_in_Stock'>Count_in_Stock </label>
                <input type={'text'} id='product_name' name={'product_name'} className='form-control'/>

                <label htmlFor='product_image'>Product Image</label>
                <input type={'file'} id='product_image' name={'product_image'} className='form-control'/>

                <label htmlFor='category'>Category</label>
                <select className='form-control' id='category'>
                <option>Select Category</option>
                {
                    categories && categories.map(category=>{
                        return <option key={category._id}>{category.category_name}</option>
                    })
                }
                </select>
                <button className='btn btn-warning mt-2 w-100'>Add New Category</button>
                


                </form>  
        </div>
    </div>
</div>
    </>
  )
}

export default AddProduct