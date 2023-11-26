import React, { useState } from 'react'

const From = () => {
    const [contact,Setcontact]=useState({

        name:"",
        LastName:"",
        Email:"",
        phone:"",
    })
  return (
    <div>

<div className=' text-blue-500 text-center  my-10 '> contact App  </div>

<div>


<input type='text'  placeholder='Name'/>

<input type='text'  placeholder='LastName' value={contact.name}/>
<input type='text'  placeholder='Email' value={contact.Email}/>
<input type='text'  placeholder='Phone' value={contact.phone}/>
<button>Addcontact</button>
</div>
    </div>
  )
}

export default From