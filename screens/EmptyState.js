import { H1, Text } from '../components/texts/index.js';
import { CTAButton } from '../components/buttons/index.js';
import styled from 'styled-components';
import Svg, { Path } from 'react-native-svg';

export default function EmptyState() {
    return (
        <Background>
            <Face width={100} height={100} />
            <H1>Add projects</H1>
            <Text>Projects liven up the app!</Text>
            <Spacer />
            <CTAButton onPress={() => console.log('')}>
                Start creating
            </CTAButton>
        </Background>
    );
}

const Background = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding-horizontal: 18px;
`;

const Spacer = styled.View`
    height: 40px;
`;

const Face = (props) => (
    <Svg
        style={{
            scale: 3.1,
            margin: 30,
        }}
        xmlSpace='preserve'
        {...props}
    >
        <Path
            d='M29 32H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3z'
            style={{
                fill: '#f2c99e',
            }}
        />
        <Path
            d='M27 32H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v26a3 3 0 0 1-3 3z'
            style={{
                fill: '#f9e0bd',
            }}
        />
        <Path
            d='M28 3v17a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h24a1 1 0 0 1 1 1zm-1 21H16a1 1 0 0 0 0 2h11a1 1 0 0 0 0-2zm-14 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z'
            style={{
                fill: '#67625d',
            }}
        />
        <Path
            d='M9.5 8h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zm.5 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0 2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0 2a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5z'
            style={{
                fill: '#e69d8a',
            }}
        />
        <Path
            d='M24.5 16h-17a.5.5 0 0 1 0-1h17a.5.5 0 0 1 0 1zM23 13.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z'
            style={{
                fill: '#98d3bc',
            }}
        />
        <Path
            d='M6.5 6h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zM25 7.5a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 .5-.5zm-2 2a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5zm2 2a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 .5-.5zm-18 6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 .5-.5z'
            style={{
                fill: '#fff2df',
            }}
        />
    </Svg>
);
