import Header from './container/Header'
import Sort from './container/Sort'
import Main from './container/Main'
import rawData from './mock/index.json'

import { InnerWrapper, Wrapper } from './styles'
import { ChangeEvent, useState } from 'react'
import { useItems } from './hooks/useItems'

function App() {
	const [categorySort, setCategorySort] = useState('isAll')
	const [selectedOption, setSelectedOption] = useState('популярности')

	const sortedItems = useItems(rawData, categorySort, selectedOption)

    const handleInputRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCategorySort(e.target.value)
    }

	const handleSortingChange = (value: string) => {
        setSelectedOption(value)
    }

	return (
		<Wrapper>
			<InnerWrapper>
				<Header />
				<Sort 
					handleInputRadioChange={handleInputRadioChange} 
					handleSortingChange={handleSortingChange}
					categorySort={categorySort} 
					selectedOption={selectedOption}
				/>
				<Main 
					items={sortedItems} 
				/>
			</InnerWrapper>
		</Wrapper>
	)
}

export default App
