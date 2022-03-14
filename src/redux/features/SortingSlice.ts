import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'

export type catType = string
export type sortType = "популярности" | "цене вверх" | "цене вниз" | "алфавиту"

export interface SortingState {
    category: catType,
    sortOption: sortType
}

export const options: sortType[] = ["популярности", "цене вверх", "цене вниз", "алфавиту"]

const initialState: SortingState = {
    category: 'isAll',
    sortOption: 'популярности'
}

export const sortingSlice = createSlice({
    name: 'sorting',
    initialState,
    reducers: {
        categoryChange(state, action: PayloadAction<catType>) {
            state.category = action.payload
        }, 
        sortOptionChange(state, action: PayloadAction<sortType>) {
            state.sortOption = action.payload
        }
    },
})

export const { categoryChange, sortOptionChange } = sortingSlice.actions

export default sortingSlice.reducer

export const selectCategory = (state: RootState) => state.sorting.category
export const selectSortOption = (state: RootState) => state.sorting.sortOption