import styled from 'styled-components'
import { Button } from '../../styles'

const Sorting = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;
`
const SortOptions = styled.div`
	display: flex;
	gap: 10px;
	position: relative;
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

	&:hover {
		color: white;
		background-color: black;
	}

	&.active {
		color: white;
		background-color: black;
	}
`
const RadioInput = styled.input`
	display: none;
`
const SortSelect = styled.div`
	display: flex;
	position: relative;
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
const DropDownListContainer = styled("div")`
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
    Sorting,
    SortOptions,
    Option,
    SortSelect,
	RadioInput,
	DropDownHeader,
	DropDownListContainer,
	DropDownList,
	ListItem
}