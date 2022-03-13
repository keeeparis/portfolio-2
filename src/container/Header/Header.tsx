import { useContext } from 'react'
import pizzaIcon from '../../media/pizza-logo.svg'
import { ItemContext } from '../context/ItemContext'
import * as H from './styles'

const Header = () => {
    const { itemsInCart } = useContext(ItemContext)

    const itemsNumber = itemsInCart.reduce((prev, curr) => prev + curr.numberOfProducts, 0)
    const content = !!itemsNumber && <>
        <H.Bar />
        {itemsNumber}
    </>

    return (
        <H.Container>
            <H.Logo>
                <H.LogoImage>
                    <H.LogoImageIcon src={pizzaIcon} /> 
                </H.LogoImage>
                <H.LogoText>
                    <H.LogoTextName>React Pizza</H.LogoTextName>
                    <H.LogoTextSub>самая вкусная пицца только у нас!</H.LogoTextSub>
                </H.LogoText>
            </H.Logo>
            <H.Cart>
                <H.CartButton>
                    Корзина {content}
                </H.CartButton>
            </H.Cart>
        </H.Container>
    )
}

export default Header