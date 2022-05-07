import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import TabLayout from './navigation/TabLayout.js';

export default function App() {
    return (
        <NavigationContainer>
            <TabLayout />
            <StatusBar style='auto' />
        </NavigationContainer>
    );
}
