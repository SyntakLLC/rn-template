import styled from 'styled-components';
import CTAButton from '../components/buttons/CTAButton.js';
import Text from '../components/texts/Text.js';
import Caption from '../components/texts/Caption.js';
import Subheading from '../components/texts/Subheading.js';
import Heading from '../components/texts/Heading.js';
import PillButton from '../components/buttons/PillButton.js';
import '../global.js';

export default function App() {
    return (
        <Background style={{ backgroundColor: global.bgColor }}>
            <Heading>11,670.90</Heading>
            <Caption uppercase>usd</Caption>
            <Subheading>What did you think?</Subheading>
            <Text>
                Let us know how your playlist kept you moving. We'll save your
                feedback for later.
            </Text>
            <Caption>This is a caption</Caption>
            <PillButton>Pill</PillButton>
            <CTAButton onPress={() => console.log('lol')}>Select</CTAButton>
        </Background>
    );
}

const Background = styled.View`
    flex: 1;
    align-items: leading;
    justify-content: center;
    padding-horizontal: 20px;
`;
