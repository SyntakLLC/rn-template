import AnimatedSplash from 'react-native-animated-splash-screen'
import store from './redux/index.js'
import { Provider } from 'react-redux'
import Home from './Home.js'
import './global.js'
import { useState, useEffect } from 'react'

export default function App() {
    let [isLoaded, setIsLoaded] = useState(false) // shows the splash screen by default

    useEffect(() => {
        setIsLoaded(true) // but on component load, we want to hide the splash screen
    })

    return (
        <AnimatedSplash
            translucent={true}
            isLoaded={isLoaded} // so we pass isLoaded to the splash screen
            logoImage={require('./assets/splash.png')}
            backgroundColor={global.primaryColor}
            logoHeight={150}
            logoWidth={150}
        >
            <Provider store={store}>
                <Home />
            </Provider>
        </AnimatedSplash>
    )
}
