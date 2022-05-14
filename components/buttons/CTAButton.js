import { useState, useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'
import styled from 'styled-components'
import LottieView from 'lottie-react-native'
import ButtonText from '../texts/ButtonText.js'

export default function CtaButton({
    children = 'Submit', // -> default text
    isDanger = false, // -> make button red
    isLoading = false, // -> disable button and add loading indicator
    isDisabled = false, // -> disable button, no loading indicator
    hasShadow = true, // does the button have a drop shadow
    hideConfetti = false, // do we wanna show the confetti animation
    isFullyRounded = false, // makes the border radius full
    isSharp = false, // removes all border radius and autocapitalizes the text
    overrideLoadingBehavior = false, // should we hide the loading icon on press?
    bgColor = '#007aff', // gives the button a custom bg color
    textColor = '#fff', // gives the button a custom text color
    onPress, // -> function to call on press
}) {
    // the prop is the default value. on press, we want to set loading to true.
    const [loading, setLoading] = useState(isLoading)

    // changes to 0.90 on press in
    const [buttonScale] = useState(new Animated.Value(1))

    // derives the color of the button from our props.
    let shouldDisable = loading || isDisabled || onPress == null
    let color = isDanger ? '#dc2626' : bgColor
    if (shouldDisable) color = '#9ca3af'

    // confetti animation ref
    const confetti = useRef(null)

    return (
        <AnimatedTouchable
            onPressIn={() => {
                Animated.timing(buttonScale, {
                    toValue: 0.95,
                    duration: 100,
                    useNativeDriver: true,
                }).start()
            }}
            onPressOut={() => {
                Animated.timing(buttonScale, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: true,
                }).start()
            }}
            onPress={() => {
                onPress()
                if (!hideConfetti) confetti.current?.play()
                if (!overrideLoadingBehavior) setLoading(true)
            }}
            disabled={shouldDisable}
            {...{ color, hasShadow, isFullyRounded, isSharp }}
            style={{ transform: [{ scale: buttonScale }] }}
        >
            <LottieView
                loop={false}
                progress={1}
                ref={confetti}
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                source={require('../../assets/lottie/confetti.json')}
            >
                {loading ? (
                    <LoadingIcon />
                ) : (
                    <ButtonText uppercase={isSharp} color={textColor}>
                        {children}
                    </ButtonText>
                )}
            </LottieView>
        </AnimatedTouchable>
    )
}

const Touchable = styled.TouchableOpacity`
    width: 94%;
    width: 100%;
    border-radius: ${(props) =>
        props.isFullyRounded ? '9999px' : props.isSharp ? '0px' : '15px'};
    height: 55px;
    background-color: ${(props) => props.color};
    justify-content: center;
    margin-vertical: 10px;
    align-items: center;
    box-shadow: ${(props) =>
        props.hasShadow
            ? `4px 4px 0px ${props.color}50`
            : `0px 0px 0px #ffffff50`};
    flex-direction: row;
`

const AnimatedTouchable = new Animated.createAnimatedComponent(Touchable)

function LoadingIcon() {
    let spinValue = new Animated.Value(0)

    // First set up animation
    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear, // Easing is an additional import from react-native
            useNativeDriver: true, // To make use of native driver for performance
        })
    ).start()

    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })

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
                fill="none"
                viewBox="0 0 24 24"
            >
                <Circle
                    className="opacity-25"
                    style={{ opacity: 0.25 }}
                    cx={12}
                    cy={12}
                    r={10}
                    stroke="currentColor"
                    strokeWidth={4}
                />
                <Path
                    className="opacity-75"
                    style={{ opacity: 0.75 }}
                    fill="currentColor"
                    d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </Svg>
        </Animated.View>
    )
}
