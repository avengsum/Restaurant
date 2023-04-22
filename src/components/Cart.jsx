import store from "../assets/store";
import { useSelector } from "react-redux";

const Cart = () => {
    const item = useSelector((store) => store.cart.items)
    return (
        <div>
            <h1>1</h1>
            <p>hhjncvccvvkjjvvjh</p>
        </div>
    )
}

export default Cart;