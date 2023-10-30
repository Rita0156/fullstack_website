
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Login = () => {
const [data,setData]=useState({email:"",password:""})

const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
    console.log(data)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://revison.herokuapp.com/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(data)
        }).then((res) => res.json()).
            then((res) => {
                console.log(res)

                localStorage.setItem("node_token",JSON.stringify(res.token))
            
            })
            .catch((err) => console.log(err))
        console.log("inside Submit")

    }

  return (
      <div>
          
          <h1>Login form</h1>
          <form onSubmit={
              handleSubmit}>
           
              <input onChange={handleChange} name="email" placeholder='Enter you email' /><br />
              <input onChange={handleChange} name="password" placeholder='Enter you password' /><br />
              <button type='submit'>Login</button>
          </form>
         <Link to="/">Homepage</Link>
    </div>
  )
}