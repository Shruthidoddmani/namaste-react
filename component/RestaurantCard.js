

const RestaurantCard = ({name, img,  cuisines, rating, deliveryTime}) => {
    return (
        <div className='res-card'>
            <img
                className='res-logo'
                alt="res-logo"
                src={img}
            >

            </img>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}
export default RestaurantCard;