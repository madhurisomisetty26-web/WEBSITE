import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Product() {

    const[data,setData]=useState([]);

    useEffect(()=>{

        axios.get("https://jsonfakery.com/photos/paginated")
        .then((result)=>{setData(result.data.data);

        });
    },[]);


  return (
    <div>
        <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      
      <li className="nav-item">
        <a className="nav-link" href="/Products">Products</a>
      </li>
      
    </ul>
    
    {data.map((eachdata)=>(
        <div>
           <p> {eachdata.caption};<br></br></p>
           <p> {eachdata.id};<br></br></p>
            <img src={eachdata.photo_url}height="100px" width="100px"/>
            <br></br>
        </div>

    )
)}
  </div>
  
</div>

    </div>
  )
}
