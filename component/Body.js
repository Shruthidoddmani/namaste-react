import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    
    useEffect(()=>{
        // getResList();
    },[])
    const getResList = async() => {
        const data = await fetch('https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0877782&lng=77.5311297&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING') 
        // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0877782&lng=77.5311297&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        json = await data.json();
        setRestaurantList(json?.data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(json);
    }
    return (
        <div className='body'>
            <div className='search'> Search</div>
            <div className='res-container'>
                <RestaurantCard name={"fdgv"} img={"dfg"} cuisines={"dfff"} rating={"56"} deliveryTime={"edrg"} />
            </div>
        </div>
    )
}
export default Body;