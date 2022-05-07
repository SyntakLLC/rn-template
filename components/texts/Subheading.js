import styled from 'styled-components';
import { useFonts, Rubik_500Medium } from '@expo-google-fonts/rubik';
import { Appearance } from 'react-native';
import '../../global.js';

export default function Subheading(props) {
    let color = '#000';
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
        color = '#fff';
    }

    let [fontsLoaded] = useFonts({
        Rubik_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <T style={{ fontFamily: 'Rubik_500Medium', color: color }}>
            {props.children}
        </T>
    );
}

const T = styled.Text`
    font-weight: 600;
    font-size: 24px;
    color: #000000;
    text-align: center;
    padding-vertical: 4px;
`;
