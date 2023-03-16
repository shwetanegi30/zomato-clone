import React, { useState } from "react";
import Header from "../Header/header";
import Foodtab from "../FoodTab/foodTab";
import Footer from "../Footer/footer";
import Delivery from "../Delivery/delivery/delivery";
import DiningOut from '../Diningout/diningout';
import Nightlife from "../Nightlife/nightlife";

function Homepage() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <Foodtab activeTab={activeTab} setActiveTab = {setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
}

const getCorrectScreen = (tab) => {

    switch(tab) {
        case "Delivery": 
        return <Delivery />
        case "Dining out":
        return <DiningOut />
        case "Nightlife":
        return <Nightlife />
        default:
          return <Delivery />
    }
};

export default Homepage;
