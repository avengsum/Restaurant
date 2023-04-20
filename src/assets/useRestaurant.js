import { useEffect, useState } from "react"

const useRestaurant = (id) => {
    const [ res, setRes] = useState(null);

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
    
    return res;
}