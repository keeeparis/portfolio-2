import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import { SortProps } from './types'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { categoryChange, catType, options, sortOptionChange, sortType } from '../../redux/features/SortingSlice'


const Sort:FC<SortProps> = ({ category, sortOption }) => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const toggling = (e: FormEvent<HTMLDivElement>) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    const handleOptionClicked = (value: sortType) => (e: FormEvent<HTMLLIElement>) => {
        e.stopPropagation()
        dispatch(sortOptionChange(value))
        setIsOpen(false)
    }

    const handleClickOutside = () => {
        setIsOpen(false)
    }

    const handleInputRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(categoryChange(e.target.value))
    }

    const isActive = (category: string, currentCategory: string) => {
        return category === currentCategory ? 'active' : ''
    }

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => window.removeEventListener('click', handleClickOutside)
    }, [])

    return (
        <S.Wrapper>
            <S.Options onChange={handleInputRadioChange}>
                <S.RadioInput value='isAll' type='radio' id='all' name='category'/>
                <S.Option as='label' htmlFor="all" className={isActive(category, 'isAll')}>Все</S.Option>

                <S.RadioInput value='isMeat' type='radio' id='Meat' name='category'/>
                <S.Option as='label' htmlFor="Meat" className={isActive(category, 'isMeat')}>Мясные</S.Option>

                <S.RadioInput value='isVeg' type='radio' id='Veg' name='category'/>
                <S.Option as='label' htmlFor="Veg" className={isActive(category, 'isVeg')}>Вегетерианская</S.Option>

                <S.RadioInput value='isGrill' type='radio' id='Grill' name='category'/>
                <S.Option as='label' htmlFor="Grill" className={isActive(category, 'isGrill')}>Гриль</S.Option>

                <S.RadioInput value='isSpicy' type='radio' id='Spicy' name='category'/>
                <S.Option as='label' htmlFor="Spicy" className={isActive(category, 'isSpicy')}>Острые</S.Option>
            </S.Options>
            <S.DropDownWrapper>
                Сортировка по 
                <S.DropDownHeader onClick={toggling}>
                    {sortOption}
                </S.DropDownHeader>
                {isOpen && (
                    <S.DropDownListWrapper>
                        <S.DropDownList>
                            {options.map((option, i) => (
                                <S.ListItem 
                                    key={i+1}
                                    onClick={handleOptionClicked(option)} 
                                    className={isActive(sortOption, option)}
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