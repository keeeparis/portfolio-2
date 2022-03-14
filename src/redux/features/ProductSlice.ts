import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer/dist/internal'
import { ItemCartProps } from '../../container/Item/types'
import { addToCartDto } from '../../container/ModalItem/types'
import { RootState } from '../store/store'

export interface ProductState {
    items: ItemCartProps[]
}

const initialState: ProductState = {
    items: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<addToCartDto>) {
            const result = convertItemProperties(action.payload)
            const items = state.items

            const foundProduct = findItem(items, result)
            
            if (!!foundProduct) {
                foundProduct.numberOfProducts++
            } else {
                items.push(result)
            }
        },
        removeFromCart(state, action) {
            const result = action.payload
            const items = state.items

            const foundProduct = findItem(items, result)
            if (foundProduct) items.splice(items.indexOf(foundProduct), 1) 
        },
        removeAllCart(state) {
            state.items = []
        },
        increment(state, action: PayloadAction<ItemCartProps>) {
            const result = action.payload
            const items = state.items

            const foundProduct = findItem(items, result)
            
            if (!!foundProduct) {
                foundProduct.numberOfProducts++
            }
        },
        decrement(state, action: PayloadAction<ItemCartProps>) {
            const result = action.payload
            const items = state.items

            const foundProduct = findItem(items, result)

            if (!!foundProduct) {
                (foundProduct.numberOfProducts > 1) 
                ?   foundProduct.numberOfProducts--
                :   items.splice(items.indexOf(foundProduct), 1) 
            }
        }
    },
})

export const { addToCart, removeFromCart, removeAllCart, increment, decrement } = productSlice.actions

export default productSlice.reducer

export const selectAllProducts = (state:RootState) => state.products.items

const convertItemProperties = (data: addToCartDto):ItemCartProps => {
    const { item, price, size, width } = data

    const tempItem = (({ 
        id, name, description, imgsrc
    }) => ({ 
        id, name, description, imgsrc 
    }))(item)

    const result = { 
        ...tempItem, 
        size, 
        width, 
        price, 
        numberOfProducts: 1 
    }
    return result
}

const findItem = (
    items: WritableDraft<ItemCartProps[]>, 
    result: ItemCartProps
) => {
    const check = [...items].find(item => 
        item.id === result.id && 
        item.size === result.size && 
        item.width === result.width
    )
    return check
}