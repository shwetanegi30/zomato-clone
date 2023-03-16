 import React from 'react'
 import './filterItem.css'
 
 const filterItem = ({filter}) => {
   return (
     <div className='filter-Item'>
         <div className='filter-name'> {filter.title}</div>
         {filter.icon && filter.icon}
     </div>
   )
 }
 
 export default filterItem
 