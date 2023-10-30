
import React, { useState } from 'react'
import { useEffect } from 'react'



export const Blog = () => {
    const [blog, setBlog] = useState([])
    
    let token = localStorage.getItem("node_token") || undefined;
    token=JSON.parse(token)
    const getData = () => {
        
        fetch(`https://revison.herokuapp.com/blog`, {
            method: "GET",
            headers: {  "Authorization":`Bearer ${token}`, "Content-Type": "application/json" },
            
        }).then((res) => res.json()).
            then((res) => {
                console.log(res)
            setBlog(res)
            })
            .catch((err) => console.log(err))
    }

    const handleDelete = (id) => {
        fetch(`https://revison.herokuapp.com/blog/delete/${id}`, {
            method: "DELETE",
            headers: {  "Authorization":`Bearer ${token}`, "Content-Type": "application/json" },
            
        }).then((res) => res.json()).
            then((res) => {
                console.log(res)
            getData()
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
    getData()
    },[])
  return ( <div>
        <h1>Blogs are here</h1>
      
      {blog.length > 0 && blog.map((item) => {
        return  <div key={item._id}>
          <h3>{ item.Title}</h3>
          <h4>{ item.Author}</h4>
          <h5>{ item.Content}</h5>
            <h6>{item.Category}</h6>
            <button  onClick={()=>handleDelete(item._id)}>DELETE</button>
            <button>Edit</button>
           
              </div>
      })}
      </div>
  )
}