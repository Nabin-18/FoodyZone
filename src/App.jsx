import React from 'react'
import styled from 'styled-components'
import "./App.css";
import { useState } from 'react';
import { useEffect } from 'react';

const BASE_URL = "http://localhost:9000/"

const App = () => {

    const [data, setData] = useState("");
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    useEffect(()=>{

        const fetchFoodData=async()=>{
            setLoading(true)
            
            
            try {
                const responce =await fetch(BASE_URL)
                const json =  await responce.json()
               
                console.log(json);
                
            } catch (error) {
                setError("Unable to fetch data");
                
            }
            
        }
        fetchFoodData();
    },[])
    return (
        <MainContainer>
            <TopContainer>
                <div className="logo">
                    <img src="/Foody Zone.svg" alt="" />
                </div>
                <div className='search'>
                    <input type="text"
                        placeholder='Search food' />
                </div>
            </TopContainer>
            <FilterComponent>
                <Button>All
                </Button>
                <Button>Breakfast
                </Button>
                <Button>Lunch
                </Button>
                <Button>Dinner
                </Button>
            </FilterComponent>
            <FoodContainer>
                <div className="background">
                    {/* <img src="bg.png" alt="" /> */}
                </div>
            </FoodContainer>
        </MainContainer>
    )
}

export default App
const MainContainer = styled.div
    `
max-width:1200px;
margin: 0 auto;





`
const TopContainer = styled.section`
display:flex;
align-items:center;
justify-content:space-between;
min-height:140px;
margin:0 20px;



.search{
    input{
        height:40px;
        padding:0 10px;
        border-radius:8px;
        border:1px solid red;
        background-color:transparent:
        outline:none;
    }
}
`
const FilterComponent = styled.section`
display:flex;
justify-content:center;
gap:12px`
const Button = styled.button`
background-color:red;
border-radius:8px;
padding:8px;
color:white;
border:none;
cursor:pointer;



`
const FoodContainer = styled.div`
background-image:url("/bg.png");
// backgrounds-size:cover;
height:calc(100vh - 200px);
padding:20px;
margin:10px;


}
`