import rawData from '../mock/index.json'
import Sort from '../container/Sort'
import Main from '../container/Main'

import { useItems } from '../hooks/useItems'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store/store'
import { selectCategory, selectSortOption } from '../redux/features/SortingSlice'

function App() {
	const category = useSelector((state: RootState) => selectCategory(state))
	const sortOption = useSelector((state: RootState) => selectSortOption(state))

	const sortedItems = useItems(rawData, category, sortOption)

	return (
		<>
			<Sort 
				category={category}
				sortOption={sortOption}
			/>
			<Main items={sortedItems} />
		</>
	)
}

export default App
