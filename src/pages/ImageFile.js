import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";

const ImageFile = () => {
  const params = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    if (params?.slug) getPostData();
  }, [params?.slug]);

  const getPostData = async () => {
    try {
      const { data } = await axios.get(
        `https://gcec-server.onrender.com/api/v1/post/getSinglePost/${params.slug}`
      );
      console.log(data);
      setPost(data?.post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="ImageContainer">
        <img src={post.image?.url} alt="" />
      </div>
    </Layout>
  );
};

export default ImageFile;
