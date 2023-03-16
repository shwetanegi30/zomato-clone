import React from "react";
import FilterItem from "./filterItem";
import "./filter.css";

function filter({ filterList }) {
  return (
    <div className="filter">
      {filterList &&
        filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />;
        })}
    </div>
  );
}

export default filter;
