import styled from "styled-components";
import { Button } from "../../styles";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`
export const Info = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
`
export const ImgWrapper = styled.div`
    width: 100px;
`
export const ImageIcon = styled.img`
    width: 100%;
    margin: 5%; 
`
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    padding-bottom: 10px;
`
export const Name = styled.h4`
    margin-bottom: 5px;
`
export const Sub = styled.div`
    font-weight: bold;
    color: rgba(0,0,0,0.4);
`
export const Counter = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
`
export const ButtonS = styled(Button)`
    width: 30px;
    height: 30px;
    background-color: transparent;
    color: var(--primary-button-color);
    padding: 0;
    letter-spacing: 0;
    font-weight: bold;
    box-shadow: none;
    border: 2px solid var(--primary-button-color);

    &:hover {
        background-color: var(--primary-button-color);
        color: white;
    }
`
export const Amount = styled.div`
    margin: 0 10px;
`
export const Price = styled.div`
    font-weight: bold;
    flex: 1 1 auto;
    text-align: center;
    font-size: 1.2em;
`
export const CloseButton = styled(ButtonS)`
    color: gray;
    border: 2px solid gray;

    &:hover {
        background-color: gray;
        color: white;
    }
`
