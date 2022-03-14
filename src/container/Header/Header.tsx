import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import pizzaIcon from '../../media/pizza-logo.svg'
import { selectAllProducts } from '../../redux/features/ProductSlice'
import { RootState } from '../../redux/store/store'
import { getTotalNumberOfItemsInCart } from '../../utils'
import * as H from './styles'

const Header = () => {
    const itemsInCart = useSelector((state: RootState) => selectAllProducts(state))

    const itemsNumber = getTotalNumberOfItemsInCart(itemsInCart)
    const content = !!itemsNumber && <>
        <H.Bar />
        {itemsNumber}
    </>

    return (
        <H.Container>
            <Link to='/'>
                <H.Logo>
                    <H.LogoImage>
                        <H.LogoImageIcon src={pizzaIcon} /> 
                    </H.LogoImage>
                    <H.LogoText>
                        <H.LogoTextName>React Pizza</H.LogoTextName>
                        <H.LogoTextSub>самая вкусная пицца только у нас!</H.LogoTextSub>
                    </H.LogoText>
                </H.Logo>
            </Link>
            <Link to='/cart'>
                <H.Cart>
                    <H.CartButton>
                        Корзина {content}
                    </H.CartButton>
                </H.Cart>
            </Link>
        </H.Container>
    )
}

export default Header