import React from 'react'

const SearchResult = ({ FoodData }) => {

  return (
    <div className="food_container">
      {
        <div className='food_items' key={FoodData.name}>
          {
            FoodData.map((value) => {
              return
              {
                FoodData.text
              }

            })
          }

        </div>
      }



    </div>
  )
}

export default SearchResult