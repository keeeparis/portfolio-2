import styled from "styled-components"
import { Button } from "../../styles"

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 80px;
`
const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`
const LogoImage = styled.div`
	width: 60px;
	height: 60px;
`
const LogoImageIcon = styled.img`
	transform: rotate(180deg);
`
const LogoText = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 5px;
`
const LogoTextName = styled.h2`
	letter-spacing: 0.1em;
	text-transform: uppercase;
`
const LogoTextSub = styled.p`
	letter-spacing: 0.05em;
	color: rgb(0 0 0 / 81%);
`
const Cart = styled.div`
	width: 150px;
`
const CartButton = styled(Button)`
	width: inherit;
	color: white;
	font-weight: bold;
	display: flex;
    justify-content: center;
`
const Bar = styled.div`
	height: 24px;
    width: 1px;
    margin: 0px 12px;
    background: rgb(255, 255, 255);
    opacity: 0.4;
`

export { 
	Container,
	Logo,
	LogoImage,
	LogoImageIcon,
	LogoText,
	LogoTextName,
	LogoTextSub,
	Cart,
	CartButton,
	Bar
}