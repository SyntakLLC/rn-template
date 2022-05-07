import styled from 'styled-components';
import { useFonts, Rubik_500Medium } from '@expo-google-fonts/rubik';
import '../../global.js';

export default function ButtonText({ children, color = global.primaryColor }) {
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
                color: color,
            }}
        >
            {children}
        </T>
    );
}

const T = styled.Text`
    font-weight: 500;
    font-size: 17px;
    color: black;
    text-align: center;
    line-height: 22px;
`;
