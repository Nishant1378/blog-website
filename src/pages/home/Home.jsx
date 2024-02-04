import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Post from "../../components/post/Post";

import "./home.css"

const Home = () => {
  return (
    <>
      <Header/>
    <div className="home">
    <Posts/>
    <Post/>
    <Sidebar/>
    </div>
    </>
  )
}

export default Home