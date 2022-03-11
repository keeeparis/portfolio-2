import { Category, MainWrapper, Name } from './styles'
import Item from '../Item'
import { FC } from 'react'
import { ItemProps } from '../Item/types'

const Main:FC<{items: ItemProps[]}> = ({ items }) => {
    return (
        <MainWrapper>
            <Name>Пицца</Name>
            <Category>
                {items.map(item => 
                    <Item key={item.id} data={item} />
                )}
            </Category>
        </MainWrapper>
    )
}

export default Main