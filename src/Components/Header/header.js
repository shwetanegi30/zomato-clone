import React from "react";
import "./header.css";

function header() {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato logo"
        className="zomato-logo"
      />
      <div className="header-right">
        <div className="search-container">
          <div className="location-wrapper">
            <div className="location-icon">
              <i className="fa-solid fa-location-dot absolute-center location-icon-icon" />
              {/* <input className="" type="text" value="text" />  */}
              <div className="color-change"> Dehradun </div>
            </div>
            <i className="fa-solid fa-caret-down" />
          </div>
          <div className="location-search-separator"></div>
          <div className="header-search-bar">
          <i className="fa-solid fa-magnifying-glass absolute-center color-change"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input color-change"
              type="text"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img 
          src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" 
          alt="profile" 
          className="header-profile-image" 
          />
          <span className="header-username"> Shweta </span>
          <i className="fa-solid fa-angle-down absolute-center angle-down" />
        </div>
      </div>
    </div>
  );
}

export default header;
