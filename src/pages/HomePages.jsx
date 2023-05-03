import React, { useState,useEffect } from 'react'
import Table from './Table'

const HomePages = () => {
    const [data,setdata]=useState([])

    console.log(data)
    useEffect(()=>{
        fetch('https://northwind.vercel.app/api/products')
        .then(res=>res.json())
        .then(myData=>setdata(myData))
    },[data])
  return (
    <Table data={data}/>
  )
}

export default HomePages