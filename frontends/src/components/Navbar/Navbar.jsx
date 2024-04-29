
import React, { useState } from 'react'; // Import useState from react
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {

  const [category,setCategory] = useState("category");
  return (
    <div className='navbar'>
       <img src= {assets.logo} alt= "" className='logo'/>
       <ul className='navbar-menu'>
       <li onClick ={()=>setCategory("home")} className={category==="home"?"active":""}>home </li>
       <li onClick ={()=>setCategory("category")} className={category==="category"?"active":""}>category </li>
       <li onClick ={()=>setCategory("mobile-app")} className={category==="mobile-app"?"active":""}>mobile-app</li>
       <li onClick ={()=>setCategory("contact-us")} className={category==="contact-us"?"active":""}>contact us</li>
      </ul>
   <div className='navbar-right'>
    <img src={assets.search_icon} alt=''/>
    <div className= "navbar-search-icon">
    <img src={assets.basket_icon} alt=''/>
    <div className='dot'></div>
    </div>
    <button>sign in</button>
   </div>
    </div>
  )
}

export default Navbar