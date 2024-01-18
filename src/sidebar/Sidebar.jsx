import React from 'react'
import "./sidebar.css"; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
         <span className="sidebarTitle">ABOUT ME</span>
         <img src="" alt="" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestias accusamus eum quo quod ipsam placeat explicabo numquam temporibus, repudiandae architecto odio. Laboriosam assumenda hic expedita animi perferendis, earum recusandae?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarLisst"> 
          <li className="sidebarListItem2">Life</li>
          <li className="sidebarListItem2">Music</li>
          <li className="sidebarListItem2">Style</li>
          <li className="sidebarListItem2">Sport</li>
          <li className="sidebarListItem2">Tech</li>
          <li className="sidebarListItem2">Cinema</li>
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
