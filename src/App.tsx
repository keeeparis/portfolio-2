import styled from 'styled-components'
import Header from './container/Header/Header'
import Sort from './container/Sort/Sort'
import Main from './container/Main/Main'
import { InnerWrapper, Wrapper } from './styles'



function App() {
	return (
		<Wrapper>
			<InnerWrapper>
				<Header />
				<Sort />
				<Main />
			</InnerWrapper>
		</Wrapper>
	)
}

export default App
