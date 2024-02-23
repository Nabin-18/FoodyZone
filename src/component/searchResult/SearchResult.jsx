import React from 'react'

const SearchResult = ({ data}) => {
  console.log(data);

  return (
    <div className="food_container">

      {
        data?.map((data) => {
          <div className='food_item' key={data.name}>
          <div className='food_image'>
          <img src={data.image} alt="" />
          
          </div>
          <div className="food_text"><p>{data.text}</p>
          <h1>hello world</h1></div>
          </div>
        })

      }


    </div>
  )
}

export default SearchResult