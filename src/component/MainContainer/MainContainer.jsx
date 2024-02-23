import React from 'react'

function MainContainer() {
    return (
        <div >
            <div className="top_container">
                <div className="logo">
                    <img src="/Foody Zone.svg" alt="" />
                </div>
                <div className='search'>
                    <input type="text"
                        placeholder='Search food' />
                </div>
            </div>
            <div className="filter_component">
                <button>All</button>
                <button>Breakfast</button>
                <button>Lunch</button>
                <button>Dinner</button>

            </div>
        </div>
    )
}

export default MainContainer