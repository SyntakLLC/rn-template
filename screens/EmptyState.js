import { useRef, useEffect } from 'react'
import { H1, Text } from '../components/texts/index.js'
import { CtaButton } from '../components/buttons/index.js'
import { Spacer } from '../components/views/index.js'
import styled from 'styled-components'
import LottieView from 'lottie-react-native'
import '../global.js'

export default function EmptyState() {
    const animation = useRef(null)

    useEffect(() => {
        animation.current?.play()
    })

    return (
        <Background>
            <LottieView
                autoPlay
                ref={animation}
                loop={true}
                style={{
                    width: '50%',
                    height: '50%',
                    left: '10%',
                    marginTop: 30,
                }}
                source={require('../assets/lottie/empty-state.json')}
            />
            <H1>Add projects</H1>
            <Text>Projects liven up the app!</Text>
            <Spacer />
            <CtaButton onPress={() => console.log('lol')}>
                Start creating
            </CtaButton>
        </Background>
    )
}

const Background = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${global.bgColor};
    padding-horizontal: 18px;
`
