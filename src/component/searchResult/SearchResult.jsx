import React from 'react'

const SearchResult = ({ FoodData}) => {
  console.log(FoodData);
  return (
    <div className="food_container">
    {
      <div className='food_items'  key={FoodData.name}>
      {
       FoodData.map((value)=>{
        <div>
        <p>{FoodData.text}</p>
        </div>
       })
      }
      </div>
    }
    


    </div>
  )
}

export default SearchResult