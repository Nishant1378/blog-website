import React from 'react'
import "./sidebar.css"; 
import {Link} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
         <span className="sidebarTitle">ABOUT ME</span>
         <img src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias accusamus eum quo quod ipsam placeat explicabo numquam temporibus, repudiandae architecto odio.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList"> 
          <li className="sidebarListItem"><Link className="link" to="/posts?cat=Life">Life</Link></li>
          <li className="sidebarListItem"><Link className="link" to="/posts?cat=Music">Music</Link></li>
          <li className="sidebarListItem"><Link className="link" to="/posts?cat=Sport">Style</Link></li>
          <li className="sidebarListItem"><Link className="link" to="/posts?cat=Style">Sport</Link></li>
          <li className="sidebarListItem"><Link className="link" to="/posts?cat=Tech">Tech</Link></li>
          <li className="sidebarListItem"><Link className="link" to="/posts?cat=Cinema">Cinema</Link></li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
       <i className=" sidebarIcon fab fa-facebook-square"></i>
       <i className=" sidebarIcon fab fa-twitter-square"></i>
       <i className=" sidebarIcon fab fa-pinterest-square"></i>
       <i className=" sidebarIcon fab fa-instagram-square"></i>
      </div>
      </div>
    </div>
  )
}

export default Sidebar
