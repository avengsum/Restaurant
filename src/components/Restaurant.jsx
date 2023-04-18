import { useEffect, useState } from "react";
import { Res_Api } from "../assets/url";
import RestaurantContainer from "./RestaurantContainer";
import { IMG_CDN_URL } from "../assets/url";

const Restaurent = () => {

    const [search,setSearch] = useState("");
    const [res,setRes] = useState([]);

    useEffect(() => {
        getRes();
    },[])

    const getRes = async () => {
        const data = await fetch(Res_Api);
        const json = await data.json();
        console.log(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
        setRes(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
        
    }

    return(
        <div className=" mt-5">
            <div className="flex justify-center items-center">
            <input
            type="text"
            name="search"
            value={search}
            placeholder="Search a restaurant you want..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-[550px] h-14 pl-4"/>

        <button 
        className="h-14 bg-orange-400 pt-[1px] hover:bg-green-500 transition-colors w-32">
        Search</button>
        </div>
        <div className="flex flex-wrap gap-10 mt-12 justify-center items-center">
        {res.map((res) => {
            return(
                    <RestaurantContainer
                    key={res.info.id}
                    name={res.info.name}
                    img={IMG_CDN_URL+res.info.cloudinaryImageId}
                    cuisines={res.info.cuisines}
                    rating={res.info.avgRating}
                    price={res.info.costForTwo}
                    min={res.info.sla.deliveryTime}
                    />
            )
        })}
        </div>
        </div>
    )
}

export default Restaurent;