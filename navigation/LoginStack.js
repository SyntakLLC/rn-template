import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login.js'
import AppIntro from '../screens/AppIntro.js'

const Stack = createStackNavigator()

export default function LoginStack() {
    return (
        <Stack.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
            })}
        >
            <Stack.Screen
                name="AppIntro"
                component={AppIntro}
                options={{
                    animationEnabled: false,
                }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    animationEnabled: false,
                }}
            />
        </Stack.Navigator>
    )
}
