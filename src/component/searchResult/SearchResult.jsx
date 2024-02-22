import React from 'react'
import styled from 'styled-components'

function SearchResult({data}) {
    // console.log(data)
    return (
        <FoodContainer>
            <FoodCards>
              {
                data.map((food)=>{
                    <foodCard key={food.name}>
                    {food.text}
                    </foodCard>
                })
              }

            </FoodCards>
        </FoodContainer>
    )
}

export default SearchResult
const FoodContainer = styled.div`
background-image:url("/bg.png");
// backgrounds-size:cover;
height:calc(100vh - 200px);
padding:20px;
margin:10px;


}
`
const FoodCards = styled.div``;
const foodCard = styled.div``;