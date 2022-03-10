import { FC } from 'react'
import { ItemProps } from '../Main/types'
import { ItemButton, ItemDescription, ItemFooter, ItemImage, ItemMain, ItemName, ItemWrapper, Price } from './styles'

const Item:FC<{data: ItemProps}> = ({ data }) => {
    return (
        <ItemWrapper>
            <ItemMain>
                <ItemImage>
                    <img 
                        src={data.imgsrc}  
                    />
                </ItemImage>
                <ItemName>{data.name}</ItemName>
                <ItemDescription>{data.description}</ItemDescription>
            </ItemMain>
            <ItemFooter>
                <Price>
                    от {data.price} тг.
                </Price>
                <ItemButton>Выбрать</ItemButton>
            </ItemFooter>
        </ItemWrapper>
    )
}

export default Item