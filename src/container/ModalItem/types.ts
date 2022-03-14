import { ItemProps } from "../Item/types"

export type ModelItemProps = {
    item: ItemProps;
}

export type addToCartDto = {
    item: ItemProps;
    size: number;
    width: number;
    price: number;
}