import React from "react";
import Slider from "react-slick";
import NextArrow from "../Carousel/nextArrow";
import PrevArrow from "../Carousel/prevArrow";
import "./collection.css";

const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

const collection = ({ List }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Dehradun, based on trends
          </div>
          <div className="collection-location">
            <div>All collections in Dehradun</div>

            <i class="fa-solid fa-caret-right absolute-center"></i>
          </div>
        </div>
        <Slider {...settings}>
          {List.map((item) => {
            <div>
              <div className="collection-cover">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="collection-image"
                />
                <div className="gradient-bg"></div>
                <div className="collection-card-title">{item.title}</div>
                <div className="collection-card-subtitle">
                    <div>{item.places}</div>
                    <i class="fa-solid fa-caret-right absolute-center"></i>
                </div>
              </div>
            </div>;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default collection;
