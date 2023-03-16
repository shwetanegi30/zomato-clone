import React from "react";
import "./foodTab.css";

const tabs = [
  {
    id: 1,
    name: "Delivery",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    color: "#FCEEC0",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
  },
  {
    id: 2,
    name: "Dining Out",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    color: "#E5F3F3",
    inactive_img:
      "	https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
  },
  {
    id: 3,
    name: "Nightlife",
    active_img:
      "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    color: "#EDF4FF",
    inactive_img:
      "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
  },
];

function foodTab({ activeTab, setActiveTab }) {
  return (
    <div className="tab-option">
      <div className="options-wrapper max-width">
        {tabs.map((active) => {
          return (
            <div
            key={active.id}
              onClick={() => setActiveTab(active.name)}
              className={`tab-item absolute-center ${
                activeTab === active.name && "active-tab"
              }`}
            >
              <div
                className="tab-image-container absolute-center"
                style={{
                  backgroundColor: `${
                    activeTab === active.name ? active.color : ""
                  }`,
                }}
              >
                <img
                  className="tab-image"
                  alt={active.name}
                  src={
                    activeTab === active.name
                      ? active.active_img
                      : active.inactive_img
                  }
                />
              </div>
              <div className="tab-name">{active.name} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default foodTab;
