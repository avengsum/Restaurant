import { useParams } from "react-router-dom"
import { Menu_Api } from "../assets/url";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../assets/url";
import { useDispatch } from "react-redux";
import { addItem } from "../assets/cartSlice";

const RestaurantMenu = () => {

    const [menu , setMenu] = useState([])
    const [helper , setHelper] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        const data = await fetch
        (`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&submitAction=ENTER`);
        const json = await data.json();
        console.log(json.data)
        setMenu(json?.data?.cards[0]?.card?.card?.info);
        setHelper(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addItem(item))
    }
    

    return (
        <div>
            <div>
                <img src={IMG_CDN_URL + menu?.cloudinaryImageId} alt="resImage" />
                {menu?.name}
                {menu?.city}
                {menu?.avgRating}
                {menu?.costForTwo}
            </div>
            <div>
                <h1>Menu</h1>
                <div >
                    {helper?.map((item) => {
                        return(
                            <div key={item?.card?.info?.id}>
                                <h1>{item?.card?.info?.name}</h1>

                                <button onClick={() => handleAdd(item?.card?.info)}
                                className="bg-green-700">Add</button>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default RestaurantMenu