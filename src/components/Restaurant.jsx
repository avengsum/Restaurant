import { useEffect, useState } from "react";
import { Res_Api } from "../assets/url";

const Restaurent = () => {

    const [search,setSearch] = useState("");
    const [res,setRes] = useState([]);

    useEffect(() => {
        getRes();
    },[])

    const  getRes = async () => {
        const data = await fetch(Res_Api);
        const json = await data.json();
        console.log(json.data)
    }

    return(
        <div className="flex justify-center items-center mt-5">
            <div>
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
        </div>
    )
}

export default Restaurent;