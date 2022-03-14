import { Suspense } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import App from '../pages/App'
import Cart from '../pages/Cart'
import Layout from './Layout'

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router basename={import.meta.env.VITE_DOMAIN}>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<App />} />
                        <Route path='cart' element={<Cart />} />
                    </Route>
                </Routes>
            </Router>
        </Suspense>
    )
}

export default AppRouter

