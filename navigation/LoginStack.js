import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login.js'
import AppIntro from '../screens/AppIntro.js'

const Stack = createStackNavigator()

export default function LoginStack() {
    const forFade = ({ current }) => ({
        cardStyle: {
            opacity: current.progress,
        },
    })

    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                cardStyleInterpolator: forFade,
            })}
        >
            <Stack.Screen name="AppIntro" component={AppIntro} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    )
}
