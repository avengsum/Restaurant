import store from "../assets/store";
import { useSelector } from "react-redux";
import RestaurantCart from "./RestaurantCart";
import { useDispatch } from "react-redux";
import { clearItem, removeItem } from "../assets/cartSlice";

const Cart = () => {
    const item = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const ClearCart = () => {
        dispatch(clearItem())
    }

    const handleRemove = (id) => {
        dispatch(removeItem(id))
    }

    return (
        <div className = "flex items-center flex-col justify-center">
            <h1 className=" text-4xl text-yellow-500">Cart</h1>
            {item.length > 0 && <button
            className=" mt-5 px-5 py-4 bg-red-500 text-white shadow-lg"
            onClick={() => ClearCart()}>Clear Cart</button>}
            {item.length > 0 ? <div>
            {item.map((item) => (
                <div>
                <RestaurantCart desc={item?.description}
                name={item?.name}
                price={item?.price} />
                <button
                className="px-2 py-4 bg-red-500 text-white"
                onClick={() => handleRemove(item?.id)}>Remove</button>
                </div>))}
               
            </div> : <p className=" mt-8 text-4xl">There is nothing in the cart add something</p>}
        </div>
    )
}

export default Cart;