import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../features/ProductSlice'
import sortingReducer from '../features/SortingSlice'
import currentItemReducer from '../features/CurrentItemSlice'

export const store = configureStore({
    reducer: {
        products: productReducer,
        sorting: sortingReducer,
        current_item: currentItemReducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch