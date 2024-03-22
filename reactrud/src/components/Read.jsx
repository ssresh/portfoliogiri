import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../readstyle.css';


function Read() {

  const [apiData, setApiData] = useState([])



  function getData() {
    axios.get('https://65ee089808706c584d9b0830.mockapi.io/crud')
      .then((res) => {
        setApiData(res.data);
      })
  }

  function handleDelete(id) {

    axios.delete(`https://65ee089808706c584d9b0830.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      })
  }

  function setDataToStorage(id, name, age, email) {
    localStorage.setItem('id', id);
    localStorage.setItem('age', age);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }
  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Link to='/create'> <button >Create New Data</button></Link>

      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>EMAIL</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
          <tbody>

            {
              apiData.map((item) => {
                return (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.e_name}</td>
                      <td>{item.e_age}</td>
                      <td>{item.e_email}</td>
                      <td><Link to='/Edit'>
                        <button onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)}>Edit</button>
                      </Link></td>
                      <td><button onClick={() => { if (window.confirm('are you sure??')) { handleDelete(item.id) } }}>Delete</button></td>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Read