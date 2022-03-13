import { ChangeEvent, FC, useContext, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { ItemContext } from "../context/ItemContext"
import { ModelItemProps } from "./types"
import { currentPrice } from "./utils"
import * as M from "./styles"

const ModalItem:FC<ModelItemProps> = ({ item, handleAddToCart }) => {
    // FIXME: возможно разбить компонент на более мелкие
    const { setCurrentItem } = useContext(ItemContext)
    const [size, setsize] = useState('small_size')
    const [width, setwidth] = useState(0)
    const [transition, setTransition] = useState(false)

    const handleClickOutside = () => {
        setCurrentItem(null)
    }

    const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setsize(e.target.value)
    }

    const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
        setwidth(Number(e.target.value))
    }

    const currentPizza = <>
        {item[size as keyof typeof item]} см, &nbsp;
        {width ? 'тонкое' : 'традиционное'} тесто
    </>

    /* FIXME: вычисление price небольшое - но можно запихнуть в useMemo */
    const price = currentPrice(item, size)

    useEffect(() => {
        window.addEventListener('click', handleClickOutside)
        return () => window.removeEventListener('click', handleClickOutside)
    }, [])

    useEffect(() => {
        setTransition(!transition)
    }, [])

    return (
        <M.Wrapper>
            {/* 
                FIXME: используется findDomNode в cssTransition - 
                предупреждения в консоли, использовать useRef?
            */}
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
                        <M.ButtonS onClick={handleAddToCart(item, size, width, price)}>
                            Добавить в корзину за {price} тг.
                        </M.ButtonS>
                    </M.InfoWrapper>
                </M.InnerInnerWrapper>
            </M.InnerWrapper>
        </M.Wrapper>
    )
}

export default ModalItem