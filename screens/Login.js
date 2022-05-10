import { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components';
import { CTAButton, PillButton } from '../components/buttons/index.js';
import { H1, H2, P2, Text } from '../components/texts/index.js';
import { Input } from '../components/inputs/index.js';
import { Grid, Col, Row } from '../components/layouts/index.js';
import ModernIconList from '../components/lists/ModernIconList.js';
import Alert from '../components/alerts/Alert.js';
import Svg, { Path } from 'react-native-svg';
import '../global.js';

export default function App() {
    let [text, updateText] = useState('');

    return (
        <Background style={{ backgroundColor: global.bgColor }}>
            <KeyboardView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView
                    style={{
                        paddingVertical: 40,
                        width: '100%',
                        paddingHorizontal: 20,
                    }}
                >
                    <Alert>
                        Hey! Looks like your account is verified. Keep checking
                        for more updates.
                    </Alert>
                    <Row style={{ alignItems: 'center' }}>
                        <H1>11,670.90</H1>
                        <P2 uppercase>usd</P2>
                    </Row>
                    <H2>What did you think?</H2>
                    <Text>
                        Let us know how your playlist kept you moving. We'll
                        save your feedback for later.
                    </Text>
                    <P2>This is a caption</P2>

                    <ModernIconList
                        items={[
                            { name: 'My accounts', icon: <TesterIcon /> },
                            { name: 'My orders', icon: <TesterIcon /> },
                            { name: 'My saved', icon: null },
                        ]}
                    />

                    <PillButton>Pill</PillButton>
                    <CTAButton onPress={() => console.log('lol')} isDanger>
                        Select
                    </CTAButton>

                    <Input
                        label='Name'
                        value={text}
                        onEdit={(t) => updateText(t)}
                    />

                    <Spacer />
                </ScrollView>
            </KeyboardView>
        </Background>
    );
}

const Background = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
`;

const Spacer = styled.View`
    flex: 1;
    height: 50px;
`;

const TesterIcon = (props) => (
    <Svg
        xmlns='http://www.w3.org/2000/svg'
        style={{ width: 20, height: 20 }}
        viewBox='0 0 20 20'
        fill='currentColor'
        {...props}
    >
        <Path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z' />
    </Svg>
);
