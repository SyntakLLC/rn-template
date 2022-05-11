import styled from 'styled-components';
import { useFonts, Rubik_500Medium } from '@expo-google-fonts/rubik';
import safeTextDisplay from './helpers/SafeTextDisplay.js';

export default function P2({
    children,
    uppercase = false,
    color = 'gray',
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
                fontWeight: uppercase ? '700' : '600',
                textTransform: uppercase ? 'uppercase' : 'none',
                color: color,
                textAlign: isCenter ? 'center' : 'left',
            }}
        >
            {safeTextDisplay(children)}
        </T>
    );
}

const T = styled.Text`
    font-weight: 600;
    font-size: 14px;
    padding-vertical: 4px;
`;
