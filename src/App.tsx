import ModalItem from './container/ModalItem/ModalItem'
import Header from './container/Header'
import Sort from './container/Sort'
import Main from './container/Main'
import rawData from './mock/index.json'

import { GlobalStyle } from './styles'
import { InnerWrapper, Wrapper } from './styles'
import { ChangeEvent, useState } from 'react'
import { useItems } from './hooks/useItems'
import { ItemContext, ItemContextType } from './container/context/ItemContext'
import { ItemCartProps, ItemProps } from './container/Item/types'

function App() {
	const [categorySort, setCategorySort] = useState('isAll')
	const [selectedOption, setSelectedOption] = useState('популярности')
	const [itemsInCart, setItemsInCart] = useState<ItemCartProps[]>([])
	const [currentItem, setCurrentItem] = useState<ItemContextType["currentItem"]>(null)

	const sortedItems = useItems(rawData, categorySort, selectedOption)

    const handleInputRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCategorySort(e.target.value)
    }

	const handleSortingChange = (value: string) => {
        setSelectedOption(value)
    }

	const handleAddToCart = (item: ItemProps, size: string, width: number, price: number) => () => {
		const newObject = {...item}
        const newItem = (({ id, name, description, imgsrc }) => ({ id, name, description, imgsrc }))(newObject)
        const result = { ...newItem, size, width, price, numberOfProducts: 1 }
		const check = [...itemsInCart].find(item => item.id === result.id && item.size === result.size && item.width === result.width)
		if (check) {
			check.numberOfProducts++
		} else {
			setItemsInCart([ ...itemsInCart, result ])
		}
		setCurrentItem(null)
	}

	return (
		<ItemContext.Provider value={{ currentItem, setCurrentItem, itemsInCart }}>
			<GlobalStyle menuOpen={!!currentItem} />
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
			{currentItem && <ModalItem item={currentItem} handleAddToCart={handleAddToCart} />}
		</ItemContext.Provider>
	)
}

export default App
