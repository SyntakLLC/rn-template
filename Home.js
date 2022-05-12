import { StatusBar } from 'expo-status-bar'
import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import TabLayout from './navigation/TabLayout.js'
import './global.js'
import LoginStack from './navigation/LoginStack.js'

export default function Home() {
    const isLoggedIn = useSelector((state) => state.isLoggedIn)

    return (
        <NavigationContainer>
            {isLoggedIn ? <TabLayout /> : <LoginStack />}
            <StatusBar style={global.colorScheme} />
        </NavigationContainer>
    )
}
