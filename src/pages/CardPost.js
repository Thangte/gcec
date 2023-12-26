import React from "react";
import "../styles/CardPost.css";
import { useNavigate } from "react-router-dom";

const CardPost = ({ p }) => {
  const navigate = useNavigate();

  const handleImage = (p) => {
    navigate(`/imageFile/${p.slug}`);
  };

  return (
    <div className="card">
      <p className="card__title">{new Date(p.createdAt).toDateString()}</p>
      <p className="card__title">{p?.title}</p>
      <p className="card__author">{p?.description}</p>
      <img
        className="card__body"
        src={p?.image?.url}
        alt=""
        onClick={() => handleImage(p)}
      />
    </div>
  );
};

export default CardPost;
