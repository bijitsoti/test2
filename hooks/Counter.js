
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Counter = () => {
    // let [name, function]=usestate(initial value)

    // name=> state variable
    // function-> function to update state variable, setName
    // initial value->
    // 0-9-> number , ''-> string, []-> array, {}-> object 
    
    // useEffect(function, dependencies)
    // function=> effect to be seen 
    // dependencies-> [statevariable1, statevariable2]- effect is seen on load and when statevariable1 or statevariable2 changes
    // []-> effect is seen on Load 
    // null-> effect is seen on Load and when any state variable change state

    let [count,setCount]= useState(0)
    let [data,setData]= useState(1000) 

    useEffect(()=>{
        window.alert('value updated')
    },[count,data])

    const increase_count = () =>{
        setCount(++count)
        console.log(count)
    }
    const decrease_count = ()=>{
        setCount(--count)
    }
    const reset_count = ()=>{
        setCount(0)
    }
   
    
  return (
    <>
    <div className='text-center'>
        <div className='display-1 text-center'>Counter:{count}</div>
        {
            count <20 &&
        <Button className='btn btn-success'onClick={increase_count}>Update count</Button>
}
{
    count > 10 &&
        <Button className='btn btn-danger'onClick={decrease_count}>Decrease count</Button>
}
        <Button className='btn btn-warning'onClick={reset_count}>Reset count</Button>

        <div className='display-1 text-center'>Data:{data}</div>
    {
        data < 2000 &&
        <Button className='btn btn-success'onClick={()=>{setData(data+100)}}>Increase Data</Button>
    }
    {
        data > 0 &&
        <Button className='btn btn-danger'onClick={()=>{setData(data-100)}}>Decrease Data</Button>
    }
        <Button className='btn btn-warning'onClick={()=>{setData(1000)}}>Reset Data</Button>

 
    </div>
    </>
  )
}

export default Counter