import React from 'react'
import { Sorting, SortOptions, SortSelect, Option } from './styles'


const Sort = () => {
    return (
        <Sorting>
            <SortOptions>
                <Option>Все</Option>
                <Option>Мясные</Option>
                <Option>Вегетерианская</Option>
                <Option>Гриль</Option>
                <Option>Острые</Option>
            </SortOptions>
            <SortSelect>
                Сортировка по популярности
            </SortSelect>
        </Sorting>
    )
}

export default Sort