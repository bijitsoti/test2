import React from 'react'

const Categories = () => {
  return (
    <>
    <div className='container my-5'>
<div className="card-group">
  <div className="card">
    <img src="./images/mobile.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Mobile</h5>
      <p className="card-text"></p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="./images/accessories.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Accessories</h5>
      <p className="card-text"></p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="./images/laptop.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Laptop</h5>
      <p className="card-text"></p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>

    </>
  )
}

export default Categories