import React from "react";

const nextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        right:"4px",
        top: "37%"
      }}
      onClick={onClick}
    ></div>
  );
};

export default nextArrow;
