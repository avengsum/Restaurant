import store from "../assets/store";
import { useSelector } from "react-redux";

const Cart = () => {
    const item = useSelector(store.cart.items)
    return (
        <div>
            <h1>hhh</h1>
        </div>
    )
}

export default Cart;