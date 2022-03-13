import { ItemProps } from "../Item/types"

export const currentPrice = (item: ItemProps, size: string) => {
    switch (size) {
        case 'small_size':
            return item.small_price
        case 'medium_size':
            return item.medium_price
        case 'large_size':
            return item.large_price
        default:              
            return item.small_price
    }
}