import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import "../styles/HomePage.css";
import axios from "axios";
import CardPost from "./CardPost";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://gcec-server.onrender.com/api/v1/post/getPosts"
      );
      console.log(data);
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="homePageContainer">
        <div className="homePageBar">
          {posts.length > 0 && posts.map((p) => <CardPost key={p._id} p={p} />)}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
