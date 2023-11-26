import { useState } from "react"


const From = () => {

const[Email,Setemail]=useState("")
const[pasword,SetPasword]=useState("")
const[Role,SetRole]=useState("")
  return (
    <div>
        
<input type='text'  placeholder='text' onChange={(event)=>{

Setemail(event.target.value)


}} />

<button onClick={()=>{
console.log(Email,pasword)

}}>login</button>  
<input type="pasword" placeholder="pasword" value={pasword} onChange={()=>{

SetPasword(event.target.value)

} }  />

<select value={Role} onChange={(event)=>{

SetRole(event.target.value)

}}>

    <option value="admin"> admin </option>
    
    <option value="user"> user </option>
</select>
    </div>
  )
}

export default From