export type ItemProps = {
    id: number;
    name: string;
    description: string;
    imgsrc: string;
    small_price: number;
    medium_price: number;
    large_price: number;
    small_size: number;
    medium_size: number;
    large_size: number;
    categories: string[];       
}

export type ItemCartProps = {
    id: number;
    name: string;
    description: string;
    imgsrc: string;
    size: number;
    width: number;
    price: number;
    numberOfProducts: number;
}