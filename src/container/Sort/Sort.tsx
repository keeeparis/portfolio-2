import { FC, FormEvent, useEffect, useState } from 'react'
import { Sorting, SortOptions, SortSelect, Option, RadioInput, DropDownHeader, DropDownListContainer, DropDownList, ListItem } from './styles'
import { SortProps } from './types'

const options = ["популярности", "цене вверх", "цене вниз", "алфавиту"]

const Sort:FC<SortProps> = ({ handleInputRadioChange, categorySort, selectedOption, handleSortingChange }) => {
    const [isOpen, setIsOpen] = useState(false)

    const isActive = (category: string, currentCategory: string) => {
        return category === currentCategory ? 'active' : ''
    }

    const toggling = (e: FormEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    const handleOptionClicked = (value: string) => (e: FormEvent<HTMLLIElement>) => {
        e.stopPropagation()
        handleSortingChange(value)
        setIsOpen(false)
    }

    const handleClickOutside = () => {
        setIsOpen(false)
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => window.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <Sorting>
            <SortOptions onChange={handleInputRadioChange}>
                <RadioInput value='isAll' type='radio' id='all' name='category'/>
                <Option as='label' htmlFor="all" className={isActive(categorySort, 'isAll')}>Все</Option>

                <RadioInput value='isMeat' type='radio' id='Meat' name='category'/>
                <Option as='label' htmlFor="Meat" className={isActive(categorySort, 'isMeat')}>Мясные</Option>

                <RadioInput value='isVeg' type='radio' id='Veg' name='category'/>
                <Option as='label' htmlFor="Veg" className={isActive(categorySort, 'isVeg')}>Вегетерианская</Option>

                <RadioInput value='isGrill' type='radio' id='Grill' name='category'/>
                <Option as='label' htmlFor="Grill" className={isActive(categorySort, 'isGrill')}>Гриль</Option>

                <RadioInput value='isSpicy' type='radio' id='Spicy' name='category'/>
                <Option as='label' htmlFor="Spicy" className={isActive(categorySort, 'isSpicy')}>Острые</Option>
            </SortOptions>
            <SortSelect>
                Сортировка по 
                <DropDownHeader onClick={toggling}>
                    {selectedOption}
                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map((option, i) => (
                                <ListItem 
                                    onClick={handleOptionClicked(option)} 
                                    key={i+1} 
                                    className={isActive(selectedOption, option)}
                                >
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </SortSelect>
        </Sorting>
    )
}

export default Sort