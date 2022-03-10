import { Category, MainWrapper, Name } from './styles'
import rawData from '../../mock/index.json'
import Item from '../Item/Item'

const Main = () => {
    return (
        <MainWrapper>
            <Name>Пицца</Name>
            <Category>
                {rawData.map(item => 
                    <Item key={item.id} data={item} />
                )}
            </Category>
        </MainWrapper>
    )
}

export default Main