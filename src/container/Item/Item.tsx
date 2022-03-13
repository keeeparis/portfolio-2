import { FC, useContext } from 'react'
import { ItemProps } from './types'
import * as I from './styles'
import { ItemContext } from '../context/ItemContext'

const Item:FC<{data: ItemProps}> = ({ data }) => {
    const { setCurrentItem } = useContext(ItemContext)

    const handleItemClick = (value: ItemProps) => () => {
        setCurrentItem(value)
    }

    return (
        <I.Wrapper onClick={handleItemClick(data)}>
            <I.Main>
                <I.Image>
                    <I.ImageIcon src={data.imgsrc} />
                </I.Image>
                <I.Name>{data.name}</I.Name>
                <I.Description>{data.description}</I.Description>
            </I.Main>
            <I.Footer>
                <I.Price>
                    от {data.small_price} тг.
                </I.Price>
                <I.ButtonS>Выбрать</I.ButtonS>
            </I.Footer>
        </I.Wrapper>
    )
}

export default Item