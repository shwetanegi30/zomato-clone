import React from "react";
import Slider from "react-slick";
import NextArrow from "../../Carousel/nextArrow";
import PrevArrow from "../../Carousel/prevArrow";
import "./topBrands.css";

const brandList = [
  {
    id: 1,
    time: "22 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187839.png?output-format=webp",
    title: "Burger King",
  },
  {
    id: 2,
    time: "24 min",
    title: "Doon Darbar",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c1bb305f14c99c2973d79c7f8f2837cc_1611303682.png?output-format=webp",
  },
  {
    id: 3,
    time: "24 min",
    title: "Walk In Woods",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ba093e1e7fef9219dfc01328c8e9175c_1611261179.png?output-format=webp",
  },
  {
    id: 4,
    time: "20 min",
    title: "Domino's Pizza",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521807149.png?output-format=webp",
  },
  {
    id: 5,
    time: "20 min",
    title: "KFC",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433657.png?output-format=webp",
  },
  {
    id: 6,
    time: "38 min",
    title: "McDonald's",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383189.png?output-format=webp",
  },
  {
    id: 7,
    time: "23 min",
    title: "Subway",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/601f1135641a0a579d585ce86bcd0f01_1506081422.png?output-format=webp",
  },
  {
    id: 8,
    time: "31 min",
    title: "Pop's Chinese",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/e9f3f29701164d6dc44c9c871e37570a_1657780724.png?output-format=webp",
  },
  {
    id: 9,
    time: "31 min",
    title: "Pizza Hut",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp",
  },
  {
    id: 10,
    time: "18 min",
    title: "Anandam",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/32b5a0a129fd8aab95afcf3c791773b8_1611304110.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function TopBrands() {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {brandList.map((brand) => {
          return (
            <div key={brand.id}>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  className="top-brands-image"
                  alt="brand-img"
                />
                <div className="brand-name"> {brand.title} </div>
                <div className="brand-time"> {brand.time} </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default TopBrands;
