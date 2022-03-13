import { FC, FormEvent, useEffect, useState } from 'react'
import { SortProps } from './types'
import * as S from './styles'

const options = ["популярности", "цене вверх", "цене вниз", "алфавиту"]

const Sort:FC<SortProps> = ({ 
    handleInputRadioChange, 
    handleSortingChange, 
    categorySort, 
    selectedOption
}) => {
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
        <S.Wrapper>
            <S.Options onChange={handleInputRadioChange}>
                <S.RadioInput value='isAll' type='radio' id='all' name='category'/>
                <S.Option as='label' htmlFor="all" className={isActive(categorySort, 'isAll')}>Все</S.Option>

                <S.RadioInput value='isMeat' type='radio' id='Meat' name='category'/>
                <S.Option as='label' htmlFor="Meat" className={isActive(categorySort, 'isMeat')}>Мясные</S.Option>

                <S.RadioInput value='isVeg' type='radio' id='Veg' name='category'/>
                <S.Option as='label' htmlFor="Veg" className={isActive(categorySort, 'isVeg')}>Вегетерианская</S.Option>

                <S.RadioInput value='isGrill' type='radio' id='Grill' name='category'/>
                <S.Option as='label' htmlFor="Grill" className={isActive(categorySort, 'isGrill')}>Гриль</S.Option>

                <S.RadioInput value='isSpicy' type='radio' id='Spicy' name='category'/>
                <S.Option as='label' htmlFor="Spicy" className={isActive(categorySort, 'isSpicy')}>Острые</S.Option>
            </S.Options>
            <S.DropDownWrapper>
                Сортировка по 
                <S.DropDownHeader onClick={toggling}>
                    {selectedOption}
                </S.DropDownHeader>
                {isOpen && (
                    <S.DropDownListWrapper>
                        <S.DropDownList>
                            {options.map((option, i) => (
                                <S.ListItem 
                                    key={i+1}
                                    onClick={handleOptionClicked(option)} 
                                    className={isActive(selectedOption, option)}
                                >
                                    {option}
                                </S.ListItem>
                            ))}
                        </S.DropDownList>
                    </S.DropDownListWrapper>
                )}
            </S.DropDownWrapper>
        </S.Wrapper>
    )
}

export default Sort