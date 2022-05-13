import styled from 'styled-components'
import { Dimensions } from 'react-native'
import { H1, H2, P2, Text } from '../components/texts/index.js'
import { CtaButton } from '../components/buttons/index.js'
import { useNavigation } from '@react-navigation/native'
import '../global.js'

const { width, height } = Dimensions.get('window')

export default function AppIntro() {
    const navigation = useNavigation()

    return (
        <Background>
            <CarouselScrollView
                horizontal
                bounces={false}
                pagingEnabled={true}
                decelerationRate={0}
                snapToAlignment={'center'}
                showsHorizontalScrollIndicator={false}
                ref={(node) => (this.scrollRef = node)}
            >
                <Page>
                    <TextSection>
                        <H1 isCenter>Get motivated like never before</H1>
                        <Text isCenter>Get motivated like never before</Text>
                    </TextSection>

                    <ButtonPosition>
                        <CtaButton
                            onPress={() => {
                                scrollToPage(1)
                            }}
                            overrideLoadingBehavior
                        >
                            Next
                        </CtaButton>
                        <Spacer />
                        <P2 />
                    </ButtonPosition>
                </Page>

                <Page>
                    <TextSection>
                        <H1 isCenter>See progress in real time</H1>
                        <Text isCenter>Get motivated like never before</Text>
                    </TextSection>

                    <ButtonPosition>
                        <CtaButton
                            onPress={() => {
                                scrollToPage(2)
                            }}
                            overrideLoadingBehavior
                        >
                            Next
                        </CtaButton>
                        <Spacer />
                        <P2 />
                    </ButtonPosition>
                </Page>

                <Page>
                    <TextSection>
                        <H2 isCenter>
                            Homexe.win, your personal sales and progress tracker
                        </H2>
                    </TextSection>

                    <ButtonPosition>
                        <CtaButton
                            onPress={() => {
                                navigation.navigate('Login')
                            }}
                            overrideLoadingBehavior
                        >
                            Register
                        </CtaButton>
                        <Spacer />
                        <P2>Already have an account? Login here</P2>
                    </ButtonPosition>
                </Page>
            </CarouselScrollView>
        </Background>
    )
}

function scrollToPage(index) {
    scrollRef.scrollTo({
        x: index * width,
        animation: false,
    })
}

const Background = styled.SafeAreaView`
    flex: 1;
    background-color: #000;
    background-color: ${global.bgColor};
`

const CarouselScrollView = styled.ScrollView`
    flex: 1;
`

const Page = styled.View`
    width: ${width}px;
    height: ${height}px;
    padding-horizontal: 20px;
    padding-top: 40px;
    background-color: ${global.bgColor};
`

const ButtonPosition = styled.View`
    position: absolute;
    width: 100%;
    bottom: 100px;
    align-self: center;
    align-items: center;
`

const Spacer = styled.View`
    height: 15px;
`

const TextSection = styled.View`
    position: absolute;
    height: ${height}px;
    width: ${width}px;
    bottom: 0px;
    background-color: ${global.bgColor};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 20px;
    justify-content: center;
    padding-bottom: 200px;
`

const Scale80View = styled.View`
    transform: scale(0.7);
`

const Scale60View = styled.View`
    transform: scale(0.5);
    left: -70px;
`
