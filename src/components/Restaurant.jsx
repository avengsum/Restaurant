import { useEffect, useState } from "react";
import { Res_Api } from "../assets/url";
import RestaurantContainer from "./RestaurantContainer";
import { IMG_CDN_URL } from "../assets/url";

const Restaurent = () => {

    const [search,setSearch] = useState("");
    const [res,setRes] = useState([]);
    const [filterRes, setFilterRes] = useState([]);

    useEffect(() => {
        getRes();
    },[])

    const getRes = async () => {
        const data = await fetch(Res_Api);
        const json = await data.json();
        setRes(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
        setFilterRes(json.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants)
        
    }

    const searchRes = (text, res) => {
        const filterData = res.filter((res) =>
            res.info?.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilterRes(filterData);
    }


    return(
        <div className=" mt-5">
            <div className="flex justify-center items-center">
            <input
            type="text"
            name="search"
            value={search}
            placeholder="Search a restaurant you want..."
            onChange={(e) => {setSearch(e.target.value)

           searchRes(e.target.value,res);
        }}

            className="w-[550px] h-14 pl-4"/>

        <button 
        className="h-14 bg-orange-400 pt-[1px] hover:bg-green-500 transition-colors w-32"
        onClick={() => {
            searchRes(search,res)
        }}
        >
        Search</button>
        </div>
        <div className="flex flex-wrap gap-10 mt-12 justify-center items-center">
        {filterRes.map((filterRes) => {
            return(
                    <RestaurantContainer
                    key={filterRes.info.id}
                    name={filterRes.info.name}
                    img={IMG_CDN_URL+filterRes.info.cloudinaryImageId}
                    cuisines={filterRes.info.cuisines}
                    rating={filterRes.info.avgRating}
                    price={filterRes.info.costForTwo}
                    min={filterRes.info.sla.deliveryTime}
                    />
            )
        })}
        </div>
        </div>
    )
}

export default Restaurent;