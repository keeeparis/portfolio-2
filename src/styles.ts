import styled from "styled-components";

const Button = styled.button`
	padding: 10px;
	font-size: 15px;
	line-height: 1.7;
	letter-spacing: 0.08em;
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
	width: 1300px;
	background-color: white;
	margin: 20px auto;
	border-radius: 10px;
	box-shadow: 0 0 19px 0 rgba(0,0,0,0.3);
	min-height: calc(100vh - 40px);
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