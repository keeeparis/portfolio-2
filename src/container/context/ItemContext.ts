import { createContext } from "react"
import { ItemCartProps, ItemProps } from "../Item/types"

export type ItemContextType = {
	currentItem: null | ItemProps,
	setCurrentItem(value: ItemProps | null): void,
	itemsInCart: ItemCartProps[]
}

export const ItemContext = createContext<ItemContextType>({ 
	currentItem: null, 
	setCurrentItem: () => {}, 
	itemsInCart: [] 
})