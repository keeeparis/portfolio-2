import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProps } from '../../container/Item/types'
import { RootState } from '../store/store'

export type currentItemType = null | ItemProps

export interface CurrentItemState {
    currentItem: currentItemType
}

const initialState: CurrentItemState = {
    currentItem: null,
}

export const currentItemSlice = createSlice({
    name: 'currentItem',
    initialState,
    reducers: {
        setCurrentItem(state, action: PayloadAction<ItemProps>) {
            state.currentItem = action.payload
        },
        removeCurrentItem(state) {
            state.currentItem = null
        }
    },
})

export const { setCurrentItem, removeCurrentItem } = currentItemSlice.actions

export default currentItemSlice.reducer

export const selectCurrentItem = (state: RootState) => state.current_item.currentItem