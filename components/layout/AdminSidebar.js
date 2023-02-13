import React from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../userAPI'
const AdminSidebar = ({category, product, orders, users}) => {
    const {user} = isAuthenticated()
  return (
    <>
     <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" >
    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      {/* <svg className="bi pe-none me-2" width="40" height="32"><use xlink:to="#bootstrap"/></svg> */}
      <i classNameName='bi bi-speedometer'></i>
      <span className="fs-4">Admin Dashboard</span>
    </Link>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        {category ?
        <Link to="/admin/categories" className="nav-link active" aria-current="page">
        {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#home"/></svg> */}
       <i classNameName='bi bi-grid'></i>
        Category
      </Link>
    
    :
    <Link to="/admin/categories" className="nav-link link-dark" aria-current="page">
    {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#home"/></svg> */}
   <i classNameName='bi bi-grid'></i>
    Category
  </Link>

      }
      </li>
       
      <li>
        {product ?
        <Link to="/admin/product" className="nav-link link-active">
        {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}
        <i classNameName='bi bi-grid'></i>
        Products
      </Link>
      :
      <Link to="/admin/product" className="nav-link link-dark">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#grid"/></svg> */}
          <i classNameName='bi bi-grid'></i>
          Products
        </Link>
      }
        
      </li>

      <li>
        {orders ?
         <Link to="/admin/orders" className="nav-link link-active">
         {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#table"/></svg> */}
         <i classNameName='bi bi-table'></i>
         Orders
       </Link>
       :
       <Link to="/admin/orders" className="nav-link link-dark">
          {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#table"/></svg> */}
          <i classNameName='bi bi-table'></i>
          Orders
        </Link>
      }
        
      </li>
     
      <li>
        {users ?
         <Link to="/admin/users" className="nav-link link-active">
         {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#people-circle"/></svg> */}
         <i classNameName='bi bi-person'></i>
         users
       </Link>
       :
       <Link to="/admin/users" className="nav-link link-dark">
       {/* <svg className="bi pe-none me-2" width="16" height="16"><use xlink:to="#people-circle"/></svg> */}
       <i classNameName='bi bi-person'></i>
       users
     </Link>
      }
       
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <Link to="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>bijit</strong>
      </Link>
      <ul className="dropdown-menu text-small shadow">
        <li><Link className="dropdown-item" to="#">{user.email}</Link></li>
        {/* <li><Link className="dropdown-item" to="#">Settings</Link></li>
        <li><Link className="dropdown-item" to="#">Profile</Link></li> */}
        <li><hr className="dropdown-divider"/></li>
        <li><span className="dropdown-item">Sign out</span></li>
      </ul>
    </div>
  </div>

  
    </>
  )
}

export default AdminSidebar