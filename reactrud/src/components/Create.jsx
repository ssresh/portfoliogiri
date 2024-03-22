import axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();


  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('https://65ee089808706c584d9b0830.mockapi.io/crud',{
      e_name: name,
      e_age: age,
      e_email: email
    }).then(()=>{
      navigate('/');
    })
  }
  return (
    <>
      <div>
          <form onSubmit={handleSubmit}>
            <h2>Create Data</h2>
            <label>Enter Name:</label><input type='text' placeholder='Name'  onChange={(e)=>setName(e.target.value)}></input><br></br>
            <label>Enter Age:</label><input type='Number' placeholder='Age' onChange={(e)=>setAge(e.target.value)}></input><br></br>
            <label>Enter E-mail:</label><input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} ></input>
            <br />  <input type="submit" value='Submit' />
          </form>
          {name}
          {age}
          {email}
      </div>



    </>
  )
}

export default Create