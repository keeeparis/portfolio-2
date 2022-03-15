import styled from "styled-components"
import { Button } from "../../styles"

const Wrapper = styled.div`
	z-index: 1000;
	position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
`
const BackgroundBoxShadow = styled.div`
	position: fixed;
    inset: 0px;
    background: black;
	opacity: 0;

	&.close-enter {
		opacity: 0;
	}
	&.close-enter-active {
		opacity: 0.55;
		transition: opacity 150ms ease 0s;
	}
	&.close-enter-done {
		opacity: 0.55;
	}
`
const InnerWrapper = styled.div`
	padding: 24px;
    display: flex;
    flex-flow: column;
`
const InnerInnerWrapper = styled.div`
	position: relative;
    max-width: 924px;
    overflow: hidden;
    border-radius: 20px;
	transform: scale(1);
	background-color: white;
	display: flex;

	@media screen and (max-width: 1024px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`
const ImageWrapper = styled.div`
	max-width: 500px;
	flex-shrink: 0;
	
	@media screen and (max-width: 800px) {
		width: fit-content;
	}
`
const Image = styled.picture`
    margin: 0px;
    position: relative;
    width: 100%;
    border-radius: 12px;
`
const ImageIcon = styled.img`
    width: 95%;
    margin: 5%;
    object-fit: contain;
`
const InfoWrapper = styled.div`
	padding: 25px;
	flex: 1 1 auto;
	
	@media screen and (max-width: 800px) {
		padding: 0 25px 25px;
	}
`
const Name = styled.h2`
	margin-bottom: 5px;
`
const Sub = styled.div`
	font-size: 0.9em;
	margin-bottom: 10px;

	&:nth-child(3) {
		margin-bottom: 30px;
	}
`
const Select = styled.div`
	border-radius: 1000px;
    background-color: rgb(243, 243, 247);
    height: 32px;
    display: flex;
    position: relative;
    overflow: hidden;
    margin: 8px 0px;
`
const ButtonS = styled(Button)`
	width: 100%;
	font-weight: bold;
	margin-top: 40px;
	
	@media screen and (max-width: 1024px) {
		margin-top: 10px;
	}
`
const Input = styled.input`
	display: none;
	position: absolute;
`
const Label = styled.label`
	display: block;
    flex: 1 1 0%;
    position: relative;
    cursor: pointer;
    user-select: none;
    border-radius: 9999px;
    color: rgb(0, 0, 0);
    font-size: 12px;
    line-height: 32px;
    font-weight: normal;
    text-align: center;
    height: 32px;
    transition: color 150ms ease 0s;
`
const Highlight = styled.div`
	position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    width: calc(33.3333%);
    transition: transform 200ms ease-out 0s, width;
    padding: 2px;
	box-sizing: border-box;

	&::before {
		content: " ";
		width: 100%;
		height: 100%;
		display: block;
		background-color: rgb(255, 255, 255);
		border-radius: 1000px;
		box-shadow: rgb(6 5 50 / 19%) 0px 6px 20px;
	}

	&[data-offset = "small_size"] {
		transform: translateX(calc(0%));
	}

	&[data-offset = "medium_size"] {
		transform: translateX(calc(100%));
	}

	&[data-offset = "large_size"] {
		transform: translateX(calc(200%));
	}
`
const HighlightWidth = styled(Highlight)`
	width: calc(50%);

	&[data-offset = "0"] {
		transform: translateX(calc(0%));
	}

	&[data-offset = "1"] {
		transform: translateX(calc(100%));
	}
`

export {
    Wrapper,
	BackgroundBoxShadow,
	InnerWrapper,
	InnerInnerWrapper,
	ImageWrapper,
	InfoWrapper,
	ImageIcon,
	Image,
	Name,
	Sub,
	Select,
	ButtonS,
	Input,
	Label,
	Highlight,
	HighlightWidth
}