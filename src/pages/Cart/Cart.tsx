import CartItem from '../../container/CartItem'
import noItemsCartIcon from '../../media/noImgCart.jpg'
import recycleBinIcon from '../../media/recycle-bin-line.svg'
import shoppingCart from '../../media/shopping-cart-head.svg'

import { useDispatch, useSelector } from 'react-redux'
import { removeAllCart, selectAllProducts } from '../../redux/features/ProductSlice'
import { Link, useNavigate } from 'react-router-dom'
import { getTotalNumberOfItemsInCart, getTotalPrice } from '../../utils'
import * as C from './style'

const Cart = () => {
    const items = useSelector(selectAllProducts)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRemoveAll = () => {
        confirm('Удалить всю корзину целиком?') 
        ?   dispatch(removeAllCart())
        :   null
    }
    const handleEnding = () => {
        alert('Мы скоро доставим Ваш заказ, только если Вы не робот. Спасибо, бип-боп!') 
        dispatch(removeAllCart())
        navigate('/')
    }

    const itemsNumber = getTotalNumberOfItemsInCart(items)
    const totalPrice = getTotalPrice(items)

    const showIfItemsAre = <>
        <C.Head>
            <C.CartWrap>
                <C.CartIcon src={shoppingCart} alt="" />
                <C.Cart>Корзина</C.Cart>
            </C.CartWrap>
            <C.RemoveAllWrap onClick={handleRemoveAll}>
                <C.RemoveIcon src={recycleBinIcon} alt="" />
                <C.RemoveAll>Очистить корзину</C.RemoveAll>
            </C.RemoveAllWrap>
        </C.Head>

        <C.Items>
            {items.map(item => 
                <CartItem item={item} key={`${item.id}${item.size}${item.width}`}/>
            )}
        </C.Items>
        <C.Info>
            <C.InfoTotalNumber>Всего пицц: <span>{itemsNumber} шт.</span></C.InfoTotalNumber>
            <C.InfoTotalPrice>Сумма заказа: <span>{totalPrice} тг.</span></C.InfoTotalPrice>
        </C.Info>
        <C.Action>
            <Link to='/'>
                <C.BackButtonLight>Вернуться назад</C.BackButtonLight>
            </Link>
            <C.ButtonNormal onClick={handleEnding}>Оплатить</C.ButtonNormal>
        </C.Action>
    </>

    const showIfCartEmpty = <>
        <C.NoItems>
            <C.NoHeader>Корзина пустая :(</C.NoHeader>
            <C.NoSub>Вероятней всего, Вы еще не заказывали пиццу.</C.NoSub>
            <C.NoSub>Для того, чтобы заказать пиццу, перейдите на главную страницу.</C.NoSub>
            <C.NoImgWrapper>
                <C.NoImg src={noItemsCartIcon} />
            </C.NoImgWrapper>
            <Link to='/'>
                <C.BackButton>Вернуться назад</C.BackButton>
            </Link>
        </C.NoItems>
    </>
    
    const content = items.length ? showIfItemsAre : showIfCartEmpty

    return (
        <C.Container>
            {content}       
        </C.Container>
    )
}

export default Cart