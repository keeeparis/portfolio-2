import styled from "styled-components"

const Name = styled.h1``
const MainWrapper = styled.div``
const Category = styled.section`
	display: flex;
	flex-wrap: wrap;

    @media screen and (max-width: 700px) {
		justify-content: center;
	}
`

export {
    Name,
    MainWrapper,
    Category
}