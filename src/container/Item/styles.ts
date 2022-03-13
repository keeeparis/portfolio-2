import styled from "styled-components"
import { Button } from "../../styles"

const Wrapper = styled.article`
	display: flex;
    flex-flow: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 60px;
    cursor: pointer;
    width: 262px;
    margin-right: 37.3333px;
`
const Main = styled.div`
	margin: 0px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
	color: rgb(92, 99, 112);
    font-weight: 400;
`
const Footer = styled.div`
    margin-top: 16px;
    display: flex;
`
const Image = styled.picture`
    margin: 0px;
    position: relative;
    width: 100%;
    border-radius: 12px;
    top: 0px;
    transition: top 150ms ease-out 0s;

	&:hover {
		top: 3px;
	}
`
const ImageIcon = styled.img`
    width: 95%;
    margin: 5% 0px 0px 5%;
    object-fit: contain;
`
const Name = styled.div`
    margin: 8px 0px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
`
const Description = styled.div``
const Price = styled.div`
    font-weight: bold;
    flex: 1 1 auto;
    padding-right: 4px;
    font-size: 22px;
    color: rgb(0, 0, 0);
    line-height: 42px;
`
const ButtonS = styled(Button)`
    letter-spacing: 0.02em;
    flex: 0 0 auto;
    height: 40px;
    min-width: 120px;
    padding: 8px 20px;
    font-size: 16px;
    line-height: 24px;
`

export {
    Wrapper,
    Main,
    Footer,
    Image,
    Name,
    Description,
    ButtonS,
    ImageIcon,
    Price,
}