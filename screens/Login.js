import styled from 'styled-components';
import { CtaButton } from '../components/buttons/index.js';
import '../global.js';

export default function App() {
    return (
        <Background style={{ backgroundColor: global.bgColor }}></Background>
    );
}

const Background = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
