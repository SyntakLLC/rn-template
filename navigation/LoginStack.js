import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login.js'
import AppIntro from '../screens/AppIntro.js'
import { fadeIn } from 'react-navigation-transitions'

const Stack = createStackNavigator()

export default function LoginStack() {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                transitionConfig: () => fadeIn(),
                animationEnabled: false,
            })}
        >
            <Stack.Screen name="AppIntro" component={AppIntro} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}
