import React from 'react'

const From = () => {
  return (
    <div>
        
<input type='text'  placeholder='text' onChange={()=>{

console.log("email")


}} />

<button onClick={()=>{
console.log("click")

}}>login</button>  


    </div>
  )
}

export default From