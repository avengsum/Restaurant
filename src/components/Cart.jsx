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
        <div>
            <h1>Cart</h1>
            <button onClick={() => ClearCart()}>Clear Cart</button>
            <div>
            {item.map((item) => (
                <div>
                <RestaurantCart desc={item?.description}
                name={item?.name}
                price={item?.price} />
                <button onClick={() => handleRemove(item?.id)}>Remove</button>
                </div>))}
               
            </div>
        </div>
    )
}

export default Cart;