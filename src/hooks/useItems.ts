import { useMemo } from "react"
import { ItemProps } from "../container/Item/types"

export const useItems = (data: ItemProps[], category: string, sort: string) => {
    const sortedItems = useSortedItems(data, sort)
    const sortedAndSearchedItems = useMemo(() => {
        if (category === 'isAll') return sortedItems
		return sortedItems.filter(item => item.categories.includes(category))
    }, [sortedItems, category])

    return sortedAndSearchedItems
}

const useSortedItems = (data: ItemProps[], sort: string) => {
    const sortedItems = useMemo(() => {
        switch (sort) {
            case 'популярности':
                return [...data].sort((a, b) => a.id - b.id)
                
            case 'цене вверх':
                return [...data].sort((a, b) => a.small_price - b.small_price)

            case 'цене вниз':
                return [...data].sort((a, b) => b.small_price - a.small_price)
                
            case 'алфавиту':
                return [...data].sort((a, b) => a.name.localeCompare(b.name))

            default:
                return data
        }
    }, [data, sort])

    return sortedItems
}