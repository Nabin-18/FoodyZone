import React from 'react'

import "./App.css";
import { useState } from 'react';
import { useEffect } from 'react';
import MainContainer from './component/MainContainer/MainContainer';
import SearchResult from './component/searchResult/SearchResult';



const BASE_URL = "http://localhost:9000/"







const App = () => {
    //      const foodData = [
    //     {
    //       name: "Boilded Egg",
    //       price: 10,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    //       image: "/images/egg.png",
    //       type: "breakfast",
    //     },
    //     {
    //       name: "RAMEN",
    //       price: 25,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    //       image: "/images/ramen.png",
    //       type: "lunch",
    //     },
    //     {
    //       name: "GRILLED CHICKEN",
    //       price: 45,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    //       image: "/images/chicken.png",
    //       type: "dinner",
    //     },
    //     {
    //       name: "CAKE",
    //       price: 18,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    //       image: "/images/cake.png",
    //       type: "breakfast",
    //     },
    //     {
    //       name: "BURGER",
    //       price: 23,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    //       image: "/images/burger.png",
    //       type: "lunch",
    //     },
    //     {
    //       name: "PANCAKE",
    //       price: 25,
    //       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    //       image: "/images/pancake.png",
    //       type: "dinner",
    //     },
    //   ];

    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    //    console.log(data)
    useEffect(() => {

        const fetchFoodData = async () => {
            setLoading(true)


            try {
                const responce = await fetch(BASE_URL)
                const json = await responce.json()
                // console.log(json);
                setData(json)



            } catch (error) {
                setError("Unable to fetch data");
            }

        }
        fetchFoodData();
    }, [])
    return (
        <div className='main-container'>


            <MainContainer />
            <SearchResult foodData={data} />


        </div>

    )
}

export default App















