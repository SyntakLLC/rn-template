import store from './redux/index.js'
import { Provider } from 'react-redux'
import Home from './Home.js'
import './global.js'

export default function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
}
