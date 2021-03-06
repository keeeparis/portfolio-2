import styled from "styled-components";
import { Button } from "../../styles";

export const Container = styled.div`
    width: 800px;
    align-self: center;
    
    @media screen and (max-width: 1000px) {
        /* max-width: 800px; */
        width: unset;
    }
`
export const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;

    @media screen and (max-width: 700px) {
		gap: 20px;
	}
`
export const CartWrap = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 10px;
`
export const Cart = styled.h2`
    font-weight: bold;
`
export const CartIcon = styled.img`
    height: 95%;
`
export const RemoveAllWrap = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    gap: 10px;
    color: rgb(0 0 0 / 55%);
    cursor: pointer;

    &:hover {
        color: black;
    }
`
export const RemoveIcon = styled.img`
    height: 75%;
`
export const RemoveAll = styled.div`
    font-weight: bold;
`
export const Items = styled.div`
    padding: 50px 0;
`
export const Info = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    @media screen and (max-width: 700px) {
		flex-direction: column;
	}
`
export const InfoTotalNumber = styled.div`
    font-size: 1.3em;
    span {
        font-weight: bold;
    }
`
export const InfoTotalPrice = styled.div`
    font-size: 1.3em;
    span {
        color: var(--primary-button-color);
        font-weight: bold;
    }
`
export const Action = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 700px) {
		flex-direction: column;
        gap: 30px;
	}
`
export const NoItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: -25px;
    text-align: center;
`
export const NoHeader = styled.h2`
    margin-bottom: 10px;
    
    @media screen and (max-width: 1024px) {
        margin-bottom: 25px;
	}
`
export const NoSub = styled.p`
    color: rgb(0 0 0 / 55%);
    margin-bottom: 5px;
`
export const NoImgWrapper = styled.div`
    max-width: 400px;
`
export const NoImg = styled.img`
    width: 95%;
    margin: 5%;
    object-fit: contain;
`
export const BackButton = styled(Button)`
    width: fit-content;
	font-weight: 600;
	padding-left: 30px;
	padding-right: 30px;
	color: white;
	background-color: black;
	box-shadow: none;
	transition-duration: 0.1s;
	user-select: none;
`
export const BackButtonLight = styled(BackButton)`
	color: gray;
    border: 2px solid gray;
	background-color: transparent;
    position: relative;
    padding-left: 50px;
    
    &:hover {
        color: white;
        background-color: gray;

        &::before {
            border-color: white;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: calc(50% - 5px);
        left: 25px;
        width: 10px;
        height: 10px;
        border-top: 2px solid gray;
        border-left: 2px solid gray;
        transform: rotate(-45deg);
    }
`
export const ButtonNormal = styled(Button)`
    width: 150px;
    letter-spacing: 0.05em;
    font-weight: bold;
`
