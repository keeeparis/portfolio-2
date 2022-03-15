import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment, removeFromCart } from '../../redux/features/ProductSlice'
import { ItemCartProps } from '../Item/types'
import * as I from './styles'

const CartItem:FC<{item: ItemCartProps}> = ({ item }) => {
    const dispatch = useDispatch()
    const currentPizza = <>
        {item.size} см,&nbsp;
        {item.width ? 'тонкое' : 'традиционное'} тесто
    </>

    const priceForPosition = item.price * item.numberOfProducts

    const handleIncerement = () => {
        dispatch(increment(item))
    }

    const handleDecrement = () => {
        dispatch(decrement(item))
    }

    const handleRemoveItem = () => {
        confirm('Удалить выбранный продукт из корзины?') 
        ?   dispatch(removeFromCart(item))
        :   null
    }

    return (
        <I.Wrapper>
            <I.Info>
                <I.ImgWrapper>
                    <I.ImageIcon src={item.imgsrc} alt={item.name} />
                </I.ImgWrapper>
                <I.Text>
                    <I.Name>{item.name}</I.Name>
                    <I.Sub>{currentPizza}</I.Sub>
                </I.Text>
            </I.Info>
            <I.Counter>
                <I.ButtonS onClick={handleDecrement}>-</I.ButtonS>
                <I.Amount>{item.numberOfProducts}</I.Amount>
                <I.ButtonS onClick={handleIncerement}>+</I.ButtonS>
            </I.Counter>
            <I.Price>{priceForPosition} тг.</I.Price>
            <I.CloseButton onClick={handleRemoveItem}>x</I.CloseButton>
        </I.Wrapper>
    )
}

export default CartItem