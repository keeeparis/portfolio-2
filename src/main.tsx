import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './container/AppRouter'

import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import './styles.scss'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
