import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{menuOpen: boolean}>`
	:root {
		--primary-button-color: rgb(255, 105, 0);
		--secondary-button-color: rgb(232 97 3);
		--thirdly-button-color: rgb(232 97 3 / 71%);
	}

	* {
		margin: 0;
		padding: 0;
		font-family: 'Stratos';
	}

	body {
		background-color: papayawhip;
		overflow-y: ${({ menuOpen }) => menuOpen ? 'hidden' : 'auto'};
		margin-right: ${({ menuOpen }) => menuOpen ? '17px' : 0};
	}

	a {
		color: unset;
		text-decoration: none;
		display: inline-flex;
	}
`

const Button = styled.button`
	padding: 10px;
	font-size: 15px;
	line-height: 1.7;
	letter-spacing: 0.12em;
	border: none;
	outline: none;
	border-radius: 9999px;
	cursor: pointer;
	color: white;
	background-color: rgb(255, 105, 0);
	box-shadow: 0px 4px 16px 0px lightgrey;
	
	&:hover {
		background-color: rgb(232 97 3);
	}
`
const Wrapper = styled.div`
	max-width: 1300px;
	background-color: white;
	margin: 20px auto;
	border-radius: 10px;
	box-shadow: 0 0 19px 0 rgba(0,0,0,0.3);
	min-height: calc(100vh - 40px);
	
	@media screen and (max-width: 1200px) {
		flex-wrap: wrap;
		margin: 20px 10px;
	}
`
const InnerWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 30px 50px;
`

export {
	Button,
	Wrapper,
	InnerWrapper
}
