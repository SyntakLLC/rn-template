import { ScrollView } from 'react-native';
import styled from 'styled-components';
import CTAButton from '../components/buttons/CTAButton.js';
import Text from '../components/texts/Text.js';
import P2 from '../components/texts/P2.js';
import H2 from '../components/texts/H2.js';
import H1 from '../components/texts/H1.js';
import PillButton from '../components/buttons/PillButton.js';
import Grid from '../components/layouts/Grid.js';
import Col from '../components/layouts/Col.js';
import '../global.js';

export default function App() {
    return (
        <Background style={{ backgroundColor: global.bgColor }}>
            <ScrollView style={{ paddingTop: 40 }}>
                <H1>11,670.90</H1>
                <P2 uppercase>usd</P2>
                <H2>What did you think?</H2>
                <Text>
                    Let us know how your playlist kept you moving. We'll save
                    your feedback for later.
                </Text>
                <P2>This is a caption</P2>

                <Grid>
                    <Col style={{ backgroundColor: 'red', height: 40 }}></Col>
                    <Col style={{ backgroundColor: 'green', height: 40 }}></Col>
                    <Col
                        style={{ backgroundColor: 'yellow', height: 40 }}
                    ></Col>
                </Grid>

                <PillButton>Pill</PillButton>
                <CTAButton onPress={() => console.log('lol')}>Select</CTAButton>
            </ScrollView>
        </Background>
    );
}

const Background = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-horizontal: 20px;
`;
