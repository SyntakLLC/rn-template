import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login.js';
import EmptyState from '../screens/EmptyState.js';
import IconBoxTabBar from './tabbars/IconBoxTabBar.js';
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
            tabBar={(props) => <IconBoxTabBar tabs={tabs} {...props} />}
            screenOptions={({ route }) => ({ headerShown: false })}
        >
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='Login2' component={EmptyState} />
            <Tab.Screen name='Login3' component={Login} />
        </Tab.Navigator>
    );
}

function returnAllTabs() {
    const iconSizeForDot = 35;
    const iconSizeForBox = 30;

    const tabs = [
        {
            name: 'Login',
            active: (
                <FilledHomeSymbol
                    width={iconSizeForBox}
                    height={iconSizeForBox}
                    color={global.primaryColor}
                />
            ),
            inactive: (
                <HomeSymbol
                    width={iconSizeForBox}
                    height={iconSizeForBox}
                    color={'#d1d5db'}
                />
            ),
        },
        {
            name: 'Login2',
            active: (
                <FilledStatisticsSymbol
                    width={iconSizeForBox}
                    height={iconSizeForBox}
                    color={global.primaryColor}
                />
            ),
            inactive: (
                <StatisticsSymbol
                    width={iconSizeForBox}
                    height={iconSizeForBox}
                    color={'#d1d5db'}
                />
            ),
        },
        {
            name: 'Login3',
            active: (
                <FilledPlusSymbol
                    width={iconSizeForBox}
                    height={iconSizeForBox}
                    color={global.primaryColor}
                />
            ),
            inactive: (
                <PlusSymbol
                    width={iconSizeForBox}
                    height={iconSizeForBox}
                    color={'#d1d5db'}
                />
            ),
        },
    ];

    return tabs;
}
