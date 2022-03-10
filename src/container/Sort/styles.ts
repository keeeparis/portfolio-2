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
`
const Option = styled(Button)`
	min-width: 100px;
	width: fit-content;
	font-weight: 600;
	padding-left: 30px;
	padding-right: 30px;
	color: black;
	background-color: transparent;
	box-shadow: none;

	&:hover {
		color: white;
		background-color: black;
	}
`
const SortSelect = styled.div``

export {
    Sorting,
    SortOptions,
    Option,
    SortSelect
}