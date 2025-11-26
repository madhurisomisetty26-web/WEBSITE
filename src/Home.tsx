import  { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {

  interface MyData{
    caption:string,
    created_at:string,
    photo_url:string

  }

    const [name, setName]=useState<MyData[]>([]);

   useEffect(()=>{
    axios.get("https://jsonfakery.com/photos/simple-paginate")
    .then((result)=>{setName(result.data.data);

    });
},[]);
   
  return (
    <div>
        <div className="card text-center">
      <li className="nav-item">
        <a className="nav-link active" href="/Home">Home</a>
      </li>
       
   
  </div>
  {name.map((eachname)=>
  <div>
  <p>{eachname.caption}</p><br></br>
 <p> {eachname.created_at}</p><br></br>
 <p> <img src={eachname.photo_url} height="100px" width="100px"/></p>
  </div>
  )
}
</div>
  );
}
