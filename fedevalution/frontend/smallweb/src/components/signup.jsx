
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Signup = () => {
const [data,setData]=useState({name:"",email:"",password:""})

const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
    console.log(data)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://revison.herokuapp.com/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(data)
        }).then((res) => res.json()).
            then((res) => console.log(res))
            .catch((err) => console.log(err))
        console.log("inside Submit")

    }

  return (
      <div>
          <Link to="/login"><button>LOGIN</button></Link>
          <h1>Signup form</h1>
          <form onSubmit={
              handleSubmit}>
              <input onChange={handleChange} name="name" placeholder='Enter you name' /><br />
              <input onChange={handleChange} name="email" placeholder='Enter you email' /><br />
              <input onChange={handleChange} name="password" placeholder='Enter you password' /><br />
              <button type='submit'>Signup</button>
          </form>
    </div>
  )
}