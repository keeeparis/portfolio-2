import { ItemCartProps } from "../container/Item/types"

export const getTotalNumberOfItemsInCart = (items: ItemCartProps[]) => {
    const total = items.reduce((prev, curr) => prev + curr.numberOfProducts, 0)
    return total
}
export const getTotalPrice = (items: ItemCartProps[]) => {
    const total = items.reduce((prev, curr) => prev + curr.numberOfProducts * curr.price, 0)
    return total
}