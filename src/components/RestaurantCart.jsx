const RestaurantCart = ({name,desc,price}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{desc}</p>
            <p>Rs {price /100}</p>
        </div>
    )
}

export default RestaurantCart