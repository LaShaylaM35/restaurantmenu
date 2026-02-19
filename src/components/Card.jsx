import React from "react";

export const Card = ({ name, price, image_url }) => {
  return (
    <>
      <div className="card m-3">
      
        <div className="card-body">
          <img src={image_url} className="card-img-top-fluid" alt={name}></img>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          
        </div>
      </div>
    </>
  );
};
