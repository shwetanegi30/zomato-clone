import React from "react";

const prevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        bakground: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        left:"-24px"
      }}
      onClick={onClick}
    ></div>
  );
};

export default prevArrow;