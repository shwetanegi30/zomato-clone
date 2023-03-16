import React from 'react'
import ExploreCard from '../explorecard/exploreCard'
import '../exploreSection/exploreSection.css'

const exploreSection = ( {List, collectionName}) => {
  return (
    <div className='max-width explore-section'>
      <div className='collection-title'> {collectionName} </div>
      <div className='explore-grid'>
        {List.map( (restaurant,id) => {
          return <ExploreCard restaurant={restaurant} key={id}  />
        })}
      </div>
    </div>
  )
}

export default exploreSection
