import { Link } from "react-router-dom";

const RestaurantContainer = ({name,img,cuisines,rating,min,price,id}) => {
    return(
        <Link to={'/restaurant/' + id}>
        <div className="min-w-[250px] max-w-[300px] border border-red-600 m-4">
            <div><img src={img} className="w-[250px]" alt="" /></div>
            
            <div>
                <div>
                    <h1>{name}</h1>
                    <p>{cuisines.slice(1,3).join(', ')}</p>
                </div>
                <div>
                    <span>{rating}</span>
                    <p>{min} min</p>
                    <p>{price}</p>
                </div>
            </div>
        </div>
        </Link>
    )

}

export default RestaurantContainer;