import  Axios  from 'axios'
import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import Loader from './Loader'




const Services = () => {
const [products,Setproducts]=useState([])
const [Load,SetLoad]=useState(false)

const fetchData=async()=>{
  SetLoad(true)
await Axios.get("https://dummyjson.com/products").then((res)=>{
    console.log( res.data.products)
    Setproducts(res.data.products)
}).catch((error)=>console.log(error))
SetLoad(false)

}
useEffect(()=>{
    fetchData()
},[])

  return (
    <>
    {
Load?
<Loader/>:
    
    <div className='w-full flex gap-5 items-center  justify-center h-screen overflow-y-scroll flex-wrap'>

    {products.map((e)=> <ServiceCard brand={e.brand} title={e.title} thumbnail={e.thumbnail}/> ) 
}

    </div>
}
</>
  )
}

export default Services