import React from 'react'
import {Link} from "react-router-dom";
import "./post.css"
const Post = () => {
  return (
    <div className="main_post">
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <div className="postInfo">
        <div className="postCategories">
            <span className="postCat">Music </span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
        <Link to="/post/abc" className='link'>Lorem, ipsum dolor.</Link>
          </span>
        <hr />
        <span className="postDate">1 hour ago</span> 
      </div>
      <p className="postDesc">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sunt doloribus eos accusantium impedit eligendi molestiae cupiditate quam aperiam repellendus. Delectus, doloremque voluptas? 
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sunt doloribus eos accusantium impedit eligendi molestiae cupiditate quam aperiam repellendus. Delectus, doloremque voluptas? 
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sunt doloribus eos accusantium impedit eligendi molestiae cupiditate quam aperiam repellendus. Delectus, doloremque voluptas? 
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sunt doloribus eos accusantium impedit eligendi molestiae cupiditate quam aperiam repellendus. Delectus, doloremque voluptas? 
      </p>
    </div>
    <div className="post">
      <img className="postImg" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
      <div className="postInfo">
        <div className="postCategories">
            <span className="postCat">Music </span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle"><Link to="/post/abc" className='link'>Lorem, ipsum dolor.</Link></span>
        <hr />
        <span className="postDate">1 hour ago</span> 
      </div>
      <p className="postDesc">
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sunt doloribus eos accusantium impedit eligendi molestiae cupiditate quam aperiam repellendus. Delectus, doloremque voluptas? 
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sunt doloribus eos accusantium impedit eligendi molestiae cupiditate quam aperiam repellendus. Delectus, doloremque voluptas? 
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sunt doloribus eos accusantium impedit eligendi molestiae cupiditate quam aperiam repellendus. Delectus, doloremque voluptas? 
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, sunt doloribus eos accusantium impedit eligendi molestiae cupiditate quam aperiam repellendus. Delectus, doloremque voluptas? 
      </p>
    </div>
    </div>
  )
}

export default Post
