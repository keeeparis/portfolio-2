import { sortType } from "../../redux/features/SortingSlice";

export type SortProps = {
    category: string;
    sortOption: sortType;
}