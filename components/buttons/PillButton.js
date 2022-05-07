import { useState } from 'react';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import ButtonText from '../texts/ButtonText.js';

export default function CTAButton({
    children = 'Submit', // -> default text
    isDanger = false, // -> make button red
    isDisabled = false, // -> disable button, no loading indicator
    onPress, // -> function to call on press
}) {
    // derives the color of the button from our props.
    let color = isDanger ? '#dc2626' : '#007aff';
    if (isDisabled) color = '#9ca3af';

    return (
        <Touchable
            onPress={() => {
                onPress();
                setLoading(true);
            }}
            disabled={isDisabled}
            style={{ borderColor: color }}
        >
            <ButtonText style={{ color: color }}>{children}</ButtonText>
        </Touchable>
    );
}

const Touchable = styled.TouchableOpacity`
    width: 45%;
    border-radius: 9999px;
    min-height: 50px;
    border-color: black;
    border-width: 2px;
    background-color: white;
    justify-content: center;
    margin-bottom: 10px;
    align-items: center;
    box-shadow: 0px 2px 0px #00000030;
`;
