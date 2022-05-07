import styled from 'styled-components';
import { useFonts, Rubik_500Medium } from '@expo-google-fonts/rubik';

export default function ButtonText({ children, isWhite, isBlack }) {
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
                color: isWhite ? '#fff' : '#000',
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
