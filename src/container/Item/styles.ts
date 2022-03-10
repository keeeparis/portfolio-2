import styled from "styled-components"
import { Button } from "../../styles"

const ItemWrapper = styled.article`
	display: flex;
    flex-flow: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin-bottom: 60px;
    cursor: pointer;
    width: 262px;
    margin-right: 37.3333px;
`
const ItemMain = styled.div`
	margin: 0px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
	color: rgb(92, 99, 112);
    font-weight: 400;
`
const ItemFooter = styled.div`
    margin-top: 16px;
    display: flex;
`
const ItemImage = styled.picture`
    margin: 0px;
    position: relative;
    width: 100%;
    border-radius: 12px;
    top: 0px;
    transition: top 150ms ease-out 0s;

	&:hover {
		top: 3px;
	}

	img {
		width: 95%;
    	margin: 5% 0px 0px 5%;
		object-fit: contain;
	}
`
const ItemName = styled.div`
    margin: 8px 0px;
    color: rgb(0, 0, 0);
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
`
const ItemDescription = styled.div``
const Price = styled.div`
    font-weight: bold;
    flex: 1 1 auto;
    padding-right: 4px;
    font-size: 22px;
    color: rgb(0, 0, 0);
    line-height: 42px;
`
const ItemButton = styled(Button)`
    letter-spacing: 0.02em;
    flex: 0 0 auto;
    height: 40px;
    min-width: 120px;
    padding: 8px 20px;
    font-size: 16px;
    line-height: 24px;
`

export {
    ItemWrapper,
    ItemMain,
    ItemFooter,
    ItemImage,
    ItemName,
    ItemDescription,
    ItemButton,
    Price
}