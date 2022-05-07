import styled from 'styled-components';
import { useFonts, Rubik_500Medium } from '@expo-google-fonts/rubik';

export default function Subheading(props) {
    let [fontsLoaded] = useFonts({
        Rubik_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    return <T style={{ fontFamily: 'Rubik_500Medium' }}>{props.children}</T>;
}

const T = styled.Text`
    font-weight: 600;
    font-size: 24px;
    color: #000000;
    text-align: center;
    padding-vertical: 4px;
`;
