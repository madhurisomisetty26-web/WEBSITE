
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Others from './Others'
import Header from './Header'

export default function App() {
  return (
    <div>
     
     


      <BrowserRouter>
       <h1>welcome </h1>
      <Header/>
      <Routes>
        <Route path="/Home" element ={<Home/>}/>
        <Route path="/Product" element ={<Product/>}/>
        <Route path="/Others" element ={<Others/>}/>
      </Routes>
      </BrowserRouter>



      
    </div>
  )
}
