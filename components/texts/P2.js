import styled from 'styled-components';
import { useFonts, Rubik_500Medium } from '@expo-google-fonts/rubik';

export default function P2({ children, uppercase = false }) {
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
                fontWeight: uppercase ? '700' : '600',
                textTransform: uppercase ? 'uppercase' : 'none',
            }}
        >
            {children}
        </T>
    );
}

const T = styled.Text`
    font-weight: 600;
    font-size: 14px;
    color: gray;
    text-align: center;
    padding-vertical: 4px;
`;
