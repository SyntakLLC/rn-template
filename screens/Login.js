import { useState, useRef } from 'react'
import { Animated, Easing, Dimensions, View, Keyboard } from 'react-native'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { StatusBar } from 'expo-status-bar'
import Svg, { Path } from 'react-native-svg'
import { CtaButton } from '../components/buttons/index.js'
import { H1, H2, P2 } from '../components/texts/index.js'
import { Spacer } from '../components/views/index.js'
import { Input } from '../components/inputs/index.js'
import LottieView from 'lottie-react-native'
import { BlurView } from 'expo-blur'
import '../global.js'

const { width, height } = Dimensions.get('window')

export default function App() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const animation = useRef(null)

    const dispatch = useDispatch() // allows us to set redux value "isLoggedIn"

    // for the logging in modal
    const [modalOpacity] = useState(new Animated.Value(0))
    const [modalScale] = useState(new Animated.Value(0.5))

    const logIn = () => {
        Keyboard.dismiss()
        Animated.timing(modalOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start()
        Animated.timing(modalScale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start()
        animation.current?.play()
        setTimeout(() => {
            dispatch({
                type: 'UPDATE_IS_LOGGED_IN',
                payload: true,
            })
        }, 3000)
    }

    return (
        <Background>
            <StatusBar style="light" />
            <KeyboardView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <HeroView color={global.primaryColor}>
                    <Blob1 position="absolute" left={-200} />
                    <Blob2 position="absolute" left={-200} top={-400} />
                    <H1 color="#fff" isCenter>
                        Track your call progress
                    </H1>
                    <H2 color="#ffffff90" isCenter>
                        With metrics
                    </H2>
                </HeroView>

                <Animated.View
                    style={{
                        opacity: modalOpacity,
                        position: 'absolute',
                        alignSelf: 'center',
                        alignItems: 'center',
                        zIndex: 100,
                        transform: [{ scale: modalScale }],
                    }}
                >
                    <BlurView
                        style={{
                            width: width / 1.2,
                            height: height / 2.5,
                            padding: 30,
                            borderRadius: 30,
                            overflow: 'hidden',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                        intensity={100}
                    >
                        <LottieView
                            autoPlay
                            ref={animation}
                            loop={false}
                            style={{
                                width: '80%',
                                height: '80%',
                                left: '5%',
                            }}
                            source={require('../assets/lottie/astronaut.json')}
                        />
                        <H2 isCenter>Logging you in...</H2>
                    </BlurView>
                </Animated.View>

                <PaddedView>
                    <View style={{ zIndex: 500 }}>
                        <Input
                            placeholder="Email"
                            value={email}
                            onEdit={setEmail}
                            keyboardType={'email-address'}
                        />
                        <Input
                            placeholder="Password"
                            value={password}
                            onEdit={setPassword}
                            isSecure={true}
                        />
                    </View>
                    <CtaButton
                        onPress={() => {
                            logIn()
                        }}
                        isDisabled={!email || !password}
                    >
                        Log in
                    </CtaButton>

                    <Spacer />

                    <P2 isCenter>Forgot password</P2>
                </PaddedView>
            </KeyboardView>
        </Background>
    )
}

const Background = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: black;
`

const HeroView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    min-height: 60%;
    max-height: 60%;
    background-color: ${(props) => props.color};
    border-radius: 30px;
    overflow: hidden;
`

const KeyboardView = styled.KeyboardAvoidingView`
    justify-content: center;
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-radius: 30px;
    background-color: ${global.bgColor};
`

const PaddedView = styled.View`
    padding-horizontal: 20px;
    top: -40px;
`

function Blob1(props) {
    let spinValue = new Animated.Value(0)

    // First set up animation
    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 40000,
            easing: Easing.linear, // Easing is an additional import from react-native
            useNativeDriver: true, // To make use of native driver for performance
        })
    ).start()

    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg'],
    })

    return (
        <Animated.View
            style={{
                transform: [{ rotate: spin }],
            }}
        >
            <Svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: 500,
                    height: 500,
                }}
                {...props}
            >
                <Path
                    fill="#38bdf899"
                    d="M169.2 78.3c9 26.7-3.3 61.2-24.9 75-21.5 13.9-52.5 7.2-75.2-9.6-22.8-16.8-37.4-43.7-30.9-67.1 6.5-23.3 34.2-43.1 63.1-43.5 28.8-.4 59 18.5 67.9 45.2Z"
                />
            </Svg>
        </Animated.View>
    )
}

function Blob2(props) {
    let spinValue = new Animated.Value(0)

    // First set up animation
    Animated.loop(
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 200000,
            easing: Easing.linear, // Easing is an additional import from react-native
            useNativeDriver: true, // To make use of native driver for performance
        })
    ).start()

    // Next, interpolate beginning and end values (in this case 0 and 1)
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg'],
    })

    return (
        <Animated.View
            style={{
                transform: [{ rotate: spin }],
            }}
        >
            <Svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                    width: 500,
                    height: 500,
                }}
                {...props}
            >
                <Path
                    fill="#1e40af99"
                    d="M131.7 62.4c14 11.6 33.3 17.2 39.2 28.4 6 11.3-1.3 28.2-11.6 41-10.3 12.7-23.6 21.3-38.1 26.7-14.5 5.4-30.3 7.7-40.7 1.2-10.4-6.4-15.5-21.5-20.6-34.5-5.2-13.1-10.4-24.1-12.7-38.5-2.2-14.4-1.3-32.3 8-44.8s27-19.6 40.3-14.2c13.3 5.3 22.2 23 36.2 34.7Z"
                />
            </Svg>
        </Animated.View>
    )
}
