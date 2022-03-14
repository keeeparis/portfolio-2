import { ChangeEvent, FC, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { ModelItemProps } from "./types"
import { useCurrentPrice } from "./utils"
import { useDispatch } from "react-redux"
import { removeCurrentItem } from "../../redux/features/CurrentItemSlice"
import { addToCart } from "../../redux/features/ProductSlice"
import * as M from "./styles"

const ModalItem:FC<ModelItemProps> = ({ item }) => {
    const [size, setsize] = useState('small_size')
    const [width, setwidth] = useState(0)
    const [transition, setTransition] = useState(false)

    const dispatch = useDispatch()

    const price = useCurrentPrice(item, size)

    const handleClickOutside = () => {
        dispatch(removeCurrentItem())
    }

    const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setsize(e.target.value)
    }

    const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
        setwidth(Number(e.target.value))
    }

    const handleAddToCart = () => {
        const responseObj = { 
            item, 
            size: Number(item[size as keyof typeof item]), 
            width, 
            price 
        }
        dispatch(addToCart(responseObj))
        dispatch(removeCurrentItem()) 
    }

    const currentPizza = <>
        {item[size as keyof typeof item]} см, &nbsp;
        {width ? 'тонкое' : 'традиционное'} тесто
    </>

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => window.removeEventListener('click', handleClickOutside)
    }, [])

    useEffect(() => {
        setTransition(!transition)
    }, [])

    return (
        <M.Wrapper>
            <CSSTransition timeout={300} classNames='close' in={transition}> 
                <M.BackgroundBoxShadow className="close" />
            </CSSTransition>
            <M.InnerWrapper onClick={(e) => e.stopPropagation()}>
                <M.InnerInnerWrapper>
                    <M.ImageWrapper>    
                        <M.Image>
                            <M.ImageIcon src={item.imgsrc} />
                        </M.Image> 
                    </M.ImageWrapper>
                    <M.InfoWrapper>
                        <M.Name>{item.name}</M.Name>
                        <M.Sub>{currentPizza}</M.Sub>
                        <M.Sub>{item.description}</M.Sub>
                        <M.Select onChange={handleSizeChange}>
                            <M.Highlight data-offset={size} />
                            <M.Input type="radio" name="size" id="small" value='small_size' />
                            <M.Label htmlFor="small">Маленькая</M.Label>
                            <M.Input type="radio" name="size" id="medium" value='medium_size' />
                            <M.Label htmlFor="medium">Средняя</M.Label>
                            <M.Input type="radio" name="size" id="large" value='large_size' />
                            <M.Label htmlFor="large">Большая</M.Label>
                        </M.Select>
                        <M.Select onChange={handleWidthChange}>
                            <M.HighlightWidth data-offset={width} />
                            <M.Input type="radio" name="width" id="traditional" value='0' />
                            <M.Label htmlFor="traditional">Традиционное</M.Label>
                            <M.Input type="radio" name="width" id="thin" value='1' />
                            <M.Label htmlFor="thin">Тонкое</M.Label>
                        </M.Select>
                        <M.ButtonS onClick={handleAddToCart}>
                            Добавить в корзину за {price} тг.
                        </M.ButtonS>
                    </M.InfoWrapper>
                </M.InnerInnerWrapper>
            </M.InnerWrapper>
        </M.Wrapper>
    )
}

export default ModalItem