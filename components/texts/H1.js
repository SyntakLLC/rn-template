import styled from 'styled-components';
import { useFonts, Rubik_500Medium } from '@expo-google-fonts/rubik';
import '../../global.js';

export default function H1(props) {
    let [fontsLoaded] = useFonts({
        Rubik_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <T
            style={{
                fontFamily: 'Rubik_500Medium',
                color: global.textColor,
            }}
        >
            {props.children}
        </T>
    );
}

const T = styled.Text`
    font-weight: 600;
    font-size: 40px;
    text-align: center;
    padding-vertical: 4px;
`;