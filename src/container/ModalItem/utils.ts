import { useMemo } from "react"
import { ItemProps } from "../Item/types"

export const useCurrentPrice = (item: ItemProps, size: string) => {
    const result = useMemo(() => {
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
    }, [item, size])
    return result
}