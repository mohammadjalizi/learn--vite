import React, { useState } from 'react'

const From = () => {
    const [alert,Setalert]=useState("")
    const [contacts,Setcontacts]=useState([])
    const [contact,Setcontact]=useState({

        name:"",
        LastName:"",
        Email:"",
        phone:"",
    })

    const chancghhandeler=(event)=>{

const name=event.target.name
const value=event.target.value
Setcontact((contact)=>({...contact,[name]:value}))
    }
  return (
    <div>

<div className=' text-blue-500 text-center  my-10 '> contact App  </div>

<div>


<input type='text'  placeholder='Name'/>

<input type='text' name='name' placeholder='LastName' value={contact.name} onChange={chancghhandeler}/>
<input type='text'name='Email'  placeholder='Email' value={contact.Email} onChange={chancghhandeler}/>
<input type='text' name='phone' placeholder='Phone' value={contact.phone} onChange={chancghhandeler}/>
<button onClick={()=>{
if(!contact.name || contact.Email || contact.phone){
Setalert("please alert")
Setalert("")
return;
}

Setcontacts((contacts)=>([...contacts,contact]))
Setcontact(

)

}}>Addcontact</button>
</div>
<div>  {alert && <h1> {alert} </h1> } </div>
    </div>
  )
}

export default From