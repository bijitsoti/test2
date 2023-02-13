import React, { useContext } from 'react'
import Display from './Display'
import { GlobalContext } from './GlobalContext'

const Info = () => {
  let info= useContext(GlobalContext)
  return (
    <>
    <h1>{info}</h1>
    <Display name={'BIJIT'} address='kathmandu'
    phone='9860452372'/>
    </>
  )
}

export default Info 