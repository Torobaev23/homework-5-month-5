import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        productsCount: 0,
    },
    reducers: {
        addBasket(state, action) {
            state.productsCount++
        }

    }
})

export const {addBasket} = productsSlice.actions;
export default productsSlice.reducer