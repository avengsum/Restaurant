import store from "../assets/store";
import { useSelector } from "react-redux";
import RestaurantCart from "./RestaurantCart";
import { useDispatch } from "react-redux";
import { clearItem } from "../assets/cartSlice";

const Cart = () => {
    const item = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const ClearCart = () => {
        dispatch(clearItem())
    }

    return (
        <div>
            <h1>Cart</h1>
            <button onClick={() => ClearCart()}>Clear Cart</button>
            <div>
            {item.map((item) => (
                <RestaurantCart desc={item?.description}
                name={item?.name}
                price={item?.price} />))}
               
            </div>
        </div>
    )
}

export default Cart;