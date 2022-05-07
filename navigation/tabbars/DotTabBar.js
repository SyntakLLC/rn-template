import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import '../../global.js';

export default function DotTabBar(props) {
    const { index, routes } = props.navigation.getState();
    const currentRoute = routes[index].name;

    return (
        <TabBarBackground style={{ backgroundColor: global.bgColor }}>
            {props.tabs.map((tab, index) => {
                return (
                    <TouchableOpacity
                        key={index}
                        onPress={() => props.navigation.navigate(tab.name)}
                        style={{ flex: 1, alignItems: 'center' }}
                    >
                        {returnTabIcon(tab, currentRoute)}
                    </TouchableOpacity>
                );
            })}
        </TabBarBackground>
    );
}

function returnTabIcon(tab, currentRoute) {
    if (tab.name == currentRoute) {
        return (
            <>
                {tab.active}
                <Dot style={{ backgroundColor: global.primaryColor }} />
            </>
        );
    } else {
        return tab.inactive;
    }
}

const TabBarBackground = styled.View`
    height: 83px;
    flex-direction: row;
    justify-content: space-evenly;
    padding-horizontal: 20px;
    padding-top: 10px;
`;

const Dot = styled.View`
    width: 6px;
    height: 6px;
    background-color: red;
    border-radius: 6px;
    align-self: center;
    margin-top: 2px;
`;
