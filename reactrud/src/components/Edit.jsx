import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function edit() {
    const [id,setId] = useState(0)
    const [name,setName] = useState('')
    const [age,setAge] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate();
    
useEffect(()=>{
setId(localStorage.getItem('id'));
setName(localStorage.getItem('name'));
setEmail(localStorage.getItem('email'));
setAge(localStorage.getItem('age'));
},[])

const handleUpdate = (e) =>{
    e.preventDefault();
    axios.put(`https://65ee089808706c584d9b0830.mockapi.io/crud/${id}`,{
        e_name: name,
       e_age: age,
       e_email: email

    }).then(()=>{
        navigate('/')
    })
}


  return (
    <>
    <div>
        <Link to='/'>
        <button>Read Data</button>
        </Link>
        <form onSubmit={handleUpdate}>
          <h2>Update Data</h2>
          <label>Enter Name:</label><input type='text' value={name} onChange={(e)=> setName(e.target.value)} placeholder='Name'  ></input><br></br>
          <label>Enter Age:</label><input type='Number'value={age} onChange={(e)=> setAge(e.target.value)}  placeholder='Age' ></input><br></br>
          <label>Enter E-mail:</label><input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Email'  ></input>
          <br />  <input type="submit" value='Update' />
        </form>
    
    </div>



  </>
  )
}

export default edit