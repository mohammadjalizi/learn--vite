import React, { useState } from 'react'

const Products = () => {

const number=[1,4,76,8]
const result=number.reduce((accutn,setacunt) => accutn + setacunt,1 )
console.log(result)
 const [add,Setadd]=useState(0)
 const [loading,Setloading]=useState(true)
  return (
    <div>
        
<div> img  </div>

<h1>mohammad po</h1>
<button onClick={()=>{

Setadd("-")


}} > stop </button>

<button onClick={()=>{

  Setadd(add-1)
}}>  -  </button>

<span>  {add} </span>
<button onClick={()=>{
Setadd(add+1)


}}> + </button>
<button onClick={()=>{
Setloading(!loading)

}}>   checkloading   </button>

{loading?"mohammadjaliziadjasdj":"false"}

    </div>
  )
}

export default Products