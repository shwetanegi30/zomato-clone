import React from 'react';
import Filter from '../filters/filter';
import ExploreSection from '../Delivery/exploreSection/exploreSection';
import {nightLife} from '../../data/nightData';
import './nightlife.css'

const nightFilter =[
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

const nightList = nightLife;

function Nightlife() {
  return (
    <div>
      <div className='max-width'>
        <Filter filterList={nightFilter} />
      </div>
      <ExploreSection List={nightList} collectionName='Nightlife Restaurants in Dehradun' />
    </div>
  )
}

export default Nightlife;
