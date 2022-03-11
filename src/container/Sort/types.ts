import { Dispatch, FormEvent, SetStateAction } from "react"

export type SortProps = {
    handleInputRadioChange(event: FormEvent<HTMLDivElement>): void,
    handleSortingChange(value: string): void;
    categorySort: string;
    selectedOption: string;
}