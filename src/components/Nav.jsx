import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Nav = () => {

    const item = useSelector((store) => store.cart.items);

    return(
        <nav className="flex items-center justify-between  border-b-blue-800 border-solid">
            <img src="https://foodfire-chapter09.netlify.app/Food%20Fire%20Logo.feaf9db9.png" 
            className="w-[90px]" alt="Logo" />
            <ul className="flex gap-4 mr-6 font-bold">
                <Link to='/'></Link><li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <Link to={'/cart'}><li className="relative">Cart</li></Link>
                {item.length > 0 &&<p className="absolute top-6 right-[85px] text-red-500">{item.length}</p>}
                <li>Logout</li>
            </ul>
        </nav>
    )
}

export default Nav;