import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { selectCurrentItem } from "../redux/features/CurrentItemSlice"
import { RootState } from "../redux/store/store"
import { GlobalStyle, InnerWrapper, Wrapper } from "../styles"
import Header from "./Header"
import ModalItem from "./ModalItem/ModalItem"

const Layout = () => {
    const currentItem = useSelector((state: RootState) => selectCurrentItem(state))
    
    return (
        <>
            <GlobalStyle menuOpen={!!currentItem} />
            <Wrapper>
                <InnerWrapper>
                    <Header />
                    <Outlet />      
                </InnerWrapper>
            </Wrapper>
            {currentItem && <ModalItem item={currentItem} />}
        </>
    )
}

export default Layout