import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from "../assets/data";

const cartSlice = createSlice({
    initialState: [],
    name: 'cart',
    reducers: {
        addToCart: (state, action) => {
            return [...state, action.payload];
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
})

const menuSlice = createSlice({
    initialState: data.menu,
    name: "menu",
    reducers: {

    }
})

export const store = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        cart: cartSlice.reducer
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;