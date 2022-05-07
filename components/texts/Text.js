import styled from 'styled-components';
import { useFonts, Rubik_500Medium } from '@expo-google-fonts/rubik';

export default function Text(props) {
    let [fontsLoaded] = useFonts({
        Rubik_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    return <T style={{ fontFamily: 'Rubik_500Medium' }}>{props.children}</T>;
}

const T = styled.Text`
    font-weight: 500;
    font-size: 17px;
    color: #9ca3af;
    padding-vertical: 4px;
    line-height: 24px;
`;
