import React from 'react';
import Collection from './collection';
import Filter from '../filters/filter';
import ExploreSection from '../Delivery/exploreSection/exploreSection';
import {diningOut} from '../../data/dining';
import './dining.css';

const  collectionList= [
  {
    id:"1",
    title:"Sweet Tooth",
    cover:"https://www.zomato.com/dehradun/sweet-tooth",
    places:"6 Places",
  },
  {
    id:"2",
    title:"Family Friendly",
    cover:"https://www.zomato.com/dehradun/family-restaurants",
    places:"17 Places",
  },
  {
    id:"3",
    title:"Great Cafes",
    cover:"https://www.zomato.com/dehradun/top-cafes",
    places:"25 Places",
  },
  {
    id:"4",
    title:"Pocket Friendly",
    cover:"https://www.zomato.com/dehradun/cheap-eats",
    places:"25 Places",
  },
  {
    id:"5",
    title:"Best Bakeries",
    cover:"https://www.zomato.com/dehradun/great-bakeries",
    places:"6 Places",
  },
  {
    id:"7",
    title:"Rooftops",
    cover:"https://www.zomato.com/dehradun/rooftop",
    places:"15 Places",
  },
  {
    id:"8",
    title:" Most Romantic Restaurants",
    cover:"https://www.zomato.com/dehradun/romantic-restaurants",
    places:"8 Places",
  },
  {
    id:"9",
    title:"Outdoor Searing",
    cover:"https://www.zomato.com/dehradun/outdoor-dining",
    places:"10 Places",
  }
]

const diningFilter =[
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

const diningList = diningOut;

function diningout() {
  return (
    <div>
      <Collection List= {collectionList}/>
      <div className='max-width'>
        <Filter filterList={diningFilter} />
      </div>
      <ExploreSection List={diningList} collectionName='Best Dining Restaurants near you in Dehradun' />
    </div>
  )
}

export default diningout;
