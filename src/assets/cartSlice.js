import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState: {
        items: [],
    },
    reducers : {
        addItem :(state,action) =>{
            state.items.push(action.payload);
        },
        removeItem : (state,action) => {
            const ItemId = action.payload;
            const updatedState = state.items.filter((item) => item.id !== ItemId)
            state.items = updatedState
        },
        clearItem : (state) => {
            state.items = [];
        },
    },
})

export const {addItem,removeItem,clearItem} = cartSlice.actions;

export default cartSlice.reducer;