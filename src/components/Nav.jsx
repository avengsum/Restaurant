import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from '../assets/logo.jfif'

const Nav = () => {

    const item = useSelector((store) => store.cart.items);

    return(
        <nav className="flex items-center justify-between  border-b-blue-800 border-solid">
            <img src={logo}
            className="w-[150px]" alt="Logo" />
            <ul className="flex gap-4 mr-6 font-bold">
                <Link to='/'><li>Home</li></Link>
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