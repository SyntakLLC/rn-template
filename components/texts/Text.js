import styled from 'styled-components';
import { useFonts, Rubik_500Medium } from '@expo-google-fonts/rubik';

export default function Text({
    children,
    color = '#9ca3af',
    isCenter = false,
}) {
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
                textAlign: isCenter ? 'center' : 'left',
            }}
        >
            {children}
        </T>
    );
}

const T = styled.Text`
    font-weight: 500;
    font-size: 17px;
    padding-vertical: 4px;
    line-height: 24px;
`;
