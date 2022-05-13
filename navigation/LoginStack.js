import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login.js'
import AppIntro from '../screens/AppIntro.js'

const Stack = createStackNavigator()

export default function LoginStack() {
    const fadeTransition = ({ current }) => ({
        cardStyle: {
            opacity: current.progress, // represents a fade transition
        },
    })

    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                cardStyleInterpolator: fadeTransition, // so any navigation in this stack fades
            })}
        >
            <Stack.Screen name="AppIntro" component={AppIntro} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}
