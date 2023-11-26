import { useState } from "react"


const From = () => {

const[Email,Setemail]=useState("")
  return (
    <div>
        
<input type='text'  placeholder='text' onChange={(event)=>{

Setemail(event.target.value)


}} />

<button onClick={()=>{
console.log(Email)

}}>login</button>  


    </div>
  )
}

export default From