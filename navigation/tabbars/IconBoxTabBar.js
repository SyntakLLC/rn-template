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
        return <FilledBox>{tab.active}</FilledBox>;
    } else {
        return <InvisibleBox>{tab.inactive}</InvisibleBox>;
    }
}

const TabBarBackground = styled.View`
    height: 83px;
    flex-direction: row;
    justify-content: space-evenly;
    padding-horizontal: 20px;
    padding-top: 10px;
`;

const FilledBox = styled.View`
    padding: 10px;
    background-color: #007aff20;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 3px #00000040;
`;

const InvisibleBox = styled.View`
    padding: 10px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;
