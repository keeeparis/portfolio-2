import styled from 'styled-components'
import { Button } from '../../styles'

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;

	@media screen and (max-width: 1024px) {
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}
`
const Options = styled.div`
	display: flex;
	gap: 10px;
	position: relative;

	@media screen and (max-width: 1024px) {
		flex-wrap: wrap;
	}
`
const Option = styled(Button)`
	width: fit-content;
	font-weight: 600;
	padding-left: 30px;
	padding-right: 30px;
	color: black;
	background-color: transparent;
	box-shadow: none;
	transition-duration: 0.1s;
	user-select: none;

	&:hover, &.active {
		color: white;
		background-color: black;
	}
`
const RadioInput = styled.input`
	display: none;
`
const DropDownWrapper = styled.div`
	display: flex;
	position: relative;

	div {
		flex: 1 0 auto;
	}
`
const DropDownHeader = styled("div")`
	margin-left: 0.4em;
	color: var(--primary-button-color);
	text-decoration: underline;
	text-decoration-style: dotted;
	user-select: none;
	cursor: pointer;

	&:hover {
		color: var(--secondary-button-color);
	}
`
const DropDownListWrapper = styled("div")`
	position: absolute;
	z-index: 100;
	top: 40px;
	right: 0;
`
const DropDownList = styled("ul")`
	padding: 0;
	margin: 0;
	background: #ffffff;
	outline: 2px solid #e5e5e5;
	border-radius: 5px;
	font-size: 1.1rem;
`
const ListItem = styled("li")`
	list-style: none;
	padding: 0.7em 1em;
	cursor: pointer;
	user-select: none;

	&:nth-child(1) {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	&:last-child {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
	}

	&.active {
		color: white;
		background-color: var(--primary-button-color);
 	}

	&:hover {
		color: white;
		background-color: var(--thirdly-button-color);
 	}
`

export {
    Wrapper,
    Options,
    Option,
    DropDownWrapper,
	RadioInput,
	DropDownHeader,
	DropDownListWrapper,
	DropDownList,
	ListItem
}