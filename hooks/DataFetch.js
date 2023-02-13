import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DataFetch = () => {
let [posts, setPosts] = useState([])
let [limit,setLimit]= useState(20)
useEffect(()=> {
// fetch(`https://jsonplaceholder.typicode.com/posts`)
// .then(res=>res.json())
// .then(result=>setPosts(result))
// .catch(err=>console.log(err))

axios.get(`https://jsonplaceholder.typicode.com/posts`)
.then(result=>setPosts(result.data.slice(0,limit)))
.catch(err=>console.log(err))

},[limit])

  return (
    <>
    {
        posts.map(item=> {
            return<div className='p-5 m-3 rounded rounded-3 shadw-lg'>
                      <h1>{item.id}</h1>
                <h1>{item.title}</h1>
                <h2>{item.body}</h2>
                </div>
        
    })
}
{limit <100 && 
<button className='btn btn-info' onClick={()=>setLimit(limit+20)}>Load More</button>
}
{
    limit >0 &&
<button className='btn btn-info' onClick={()=>setLimit(limit-20)}>Show Less</button>
}
</>
  )
}

export default DataFetch