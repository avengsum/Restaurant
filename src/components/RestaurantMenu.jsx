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
        setMenu(json?.data?.cards[0]?.card?.card?.info);
        setHelper(json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    const dispatch = useDispatch();

    const handleAdd = (item) => {
        dispatch(addItem(item))
    }
    

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <img className="rounde-sm shadow-lg" src={IMG_CDN_URL + menu?.cloudinaryImageId} alt="resImage" />
                <p className="text-2xl">{menu?.name}</p>
                <p>{menu?.city}</p>
                <p>{menu?.avgRating}⭐</p>
                <p>cost for two - {menu?.costForTwo /100} rs</p>
            </div>
            <div className="">
                <h1 className="text-center text-4xl mt-5">Menu</h1>
                <div className="" >
                    {helper?.map((item) => {
                        return(
                            <div className="flex items-center gap-[400px] justify-center " key={item?.card?.info?.id}>
                                <h1 className="text-center text-3xl ">{item?.card?.info?.name}</h1>

                                <button onClick={() => handleAdd(item?.card?.info)}
                                className="text-green-700 border border-black p-4 mb-4 text-center">Add</button>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default RestaurantMenu