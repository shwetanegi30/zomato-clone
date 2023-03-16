import React from "react";
import Filter from "../../filters/filter";
import DeliveryCollection from "../deliveryCollection/deliveryCollection";
import "../delivery/delivery.css";
import TopBrands from "../topbrand/TopBrands";
import ExploreSection from "../exploreSection/exploreSection";
import { restaurants } from "../../../data/restaurants";

const deliveryFilter =[
  {
    id: 1,
    icon: <i className="fa-solid fa-sliders"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Pure veg",
  },
  {
    id: 4,
    title: "Cuisines",
    icon: <i className="fa-solid fa-angle-down"></i>,
  },
  {
    id: 5,
    title: "More Filters",
    icon: <i className="fa-solid fa-angle-down absolute-center angle-down" />,
  },

];

const restaurantList = restaurants;

function delivery() {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilter} />
      </div>
       <DeliveryCollection />
       <TopBrands />
       <ExploreSection List= {restaurantList} collectionName='Delivery Restaurant in Dehradun' />
    </div>
  );
}

export default delivery;
