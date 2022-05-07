import { useState } from 'react';
import { Animated, Easing } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import styled from 'styled-components';
import LottieView from 'lottie-react-native';
import ButtonText from '../texts/ButtonText.js';

export default function CTAButton({
    children = 'Submit', // -> default text
    isDanger = false, // -> make button red
    isLoading = false, // -> disable button and add loading indicator
    isDisabled = false, // -> disable button, no loading indicator
    onPress, // -> function to call on press
}) {
    // the prop is the default value. on press, we want to set loading to true.
    const [loading, setLoading] = useState(isLoading);

    // derives the color of the button from our props.
    let shouldDisable = loading || isDisabled;
    let color = isDanger ? '#dc2626' : '#007aff';
    if (shouldDisable) color = '#9ca3af';

    return (
        <Touchable
            onPress={() => {
                onPress();
                setLoading(true);
            }}
            disabled={shouldDisable}
            style={{ backgroundColor: color }}
        >
            {loading ? (
                <LoadingIcon />
            ) : (
                <ButtonText color='#fff'>{children}</ButtonText>
            )}
        </Touchable>
    );
}

const Touchable = styled.TouchableOpacity`
    width: 94%;
    width: 100%;
    border-radius: 15px;
    height: 55px;
    background-color: #000;
    justify-content: center;
    margin-vertical: 10px;
    align-items: center;
    box-shadow: 0px 2px 0px #00000030;
    flex-direction: row;
`;

function LoadingIcon() {
    let spinValue = new Animated.Value(0);

    // First set up animation
    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear, // Easing is an additional import from react-native
            useNativeDriver: true, // To make use of native driver for performance
        }),
    ).start();

    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <Svg
                style={{
                    marginRight: 12,
                    marginLeft: 12,
                    color: '#ffffff',
                    width: 16,
                    height: 16,
                }}
                fill='none'
                viewBox='0 0 24 24'
            >
                <Circle
                    className='opacity-25'
                    style={{ opacity: 0.25 }}
                    cx={12}
                    cy={12}
                    r={10}
                    stroke='currentColor'
                    strokeWidth={4}
                />
                <Path
                    className='opacity-75'
                    style={{ opacity: 0.75 }}
                    fill='currentColor'
                    d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                />
            </Svg>
        </Animated.View>
    );
}
