import React from 'react'
import { useParams } from 'react-router-dom'
import RestaurantCardClass from './RestaurantCardClass';
// import useOnlineStatus from './utils/useOnlineStatus';

const RestaurantMenu = () => {
    const params = useParams();

  return (
    <div>RestaurantMenu {params?.resId} </div>
    //  {/* <RestaurantCardClass/> */}
  )
}

export default RestaurantMenu;