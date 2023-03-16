import React from "react";
import "./deliveryItem.css";

const deliveryItem = ({item}) => {
  return (
    <div>
      <div className="delivery-item-cover">
        <img
          src={item.cover}
          alt={item.title}
          className="delivery-item-image"
        />
        <div className="delivery-title-name"> {item.title} </div>
      </div>
    </div>
  );
};

export default deliveryItem;
