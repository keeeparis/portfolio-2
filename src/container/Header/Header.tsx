import pizzaIcon from '../../media/pizza-logo.svg'
import { Cart, CartButton, Container, Logo, LogoImage, LogoImageIcon, LogoText, LogoTextName, LogoTextSub } from './styles'

const Header = () => {
    return (
        <Container>
            <Logo>
                <LogoImage>
                    <LogoImageIcon src={pizzaIcon}/>
                </LogoImage>
                <LogoText>
                    <LogoTextName>React Pizza</LogoTextName>
                    <LogoTextSub>самая вкусная пицца только у нас!</LogoTextSub>
                </LogoText>
            </Logo>
            <Cart>
                <CartButton>
                    Корзина
                </CartButton>
            </Cart>
        </Container>
    )
}

export default Header