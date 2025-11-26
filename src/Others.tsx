import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Others() {
    const [data,setData]=useState([]);

    useEffect(()=>{ 
        axios.get("https://jsonfakery.com/photos/paginated")
        .then((result)=>{setData(result.data.data);

        });
    },[])
  return (
    <div>
        
        <div className="card text-center">
  <div className="card-header">
    <ul className="nav nav-pills card-header-pills">
      <li className="nav-item">
        <a className="nav-link" href="/Others">Others</a>
      </li>
    </ul>
  </div>
</div>
<div>

    {data.map((eachdata)=>(
        <div>
          <p>  {eachdata.caption}</p><br></br>
          <p>{eachdata.created_at}</p><br></br>
          <p><img src={eachdata.photo_url} height="100px" width="100px"/></p>
            <br></br>
        </div>
    )
    )}

</div>
    </div>
  )
}
