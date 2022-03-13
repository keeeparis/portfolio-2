import { ItemCartProps, ItemProps } from "../Item/types"

export type ModelItemProps = {
    item: ItemProps;
    handleAddToCart(item: ItemProps, size: string, width: number, price: number): () => void;
}