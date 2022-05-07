import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login.js';
import CTAButton from '../components/buttons/CTAButton.js';
import DotTabBar from './tabbars/DotTabBar.js';
import {
    HomeSymbol,
    StatisticsSymbol,
    DealsSymbol,
    UsersSymbol,
    InsightsSymbol,
    PlusSymbol,
    FilledPlusSymbol,
    FilledInsightsSymbol,
    FilledHomeSymbol,
    FilledStatisticsSymbol,
    FilledDealsSymbol,
    FilledUsersSymbol,
} from '../assets/icons/icons.js';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    let tabs = returnAllTabs();

    return (
        <Tab.Navigator
            tabBar={(props) => <DotTabBar tabs={tabs} {...props} />}
            screenOptions={({ route }) => ({ headerShown: false })}
        >
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='Nee' component={CTAButton} />
        </Tab.Navigator>
    );
}

function returnAllTabs() {
    const tabs = [
        {
            name: 'Login',
            active: (
                <FilledHomeSymbol
                    width={35}
                    height={35}
                    color={global.primaryColor}
                />
            ),
            inactive: <HomeSymbol width={35} height={35} color={'#d1d5db'} />,
        },
        {
            name: 'Nee',
            active: (
                <FilledPlusSymbol
                    width={35}
                    height={35}
                    color={global.primaryColor}
                />
            ),
            inactive: <PlusSymbol width={35} height={35} color={'#d1d5db'} />,
        },
    ];

    return tabs;
}
