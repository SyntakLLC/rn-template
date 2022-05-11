import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { H1, H2, P2 } from '../components/texts/index.js';
import { CtaButton } from '../components/buttons/index.js';
import '../global.js';

const { width, height } = Dimensions.get('window');

export default function FullScreenCarousel() {
    return (
        <Background>
            <CarouselScrollView
                horizontal
                scrollEventThrottle={16}
                pagingEnabled={true}
                decelerationRate={0}
                snapToAlignment={'center'}
                showsHorizontalScrollIndicator={false}
                ref={(node) => (this.scrollRef = node)}
            >
                <Page>
                    <H1>Get motivated like never before</H1>

                    <ButtonPosition>
                        <CtaButton
                            onPress={() => {
                                moveBody(1);
                            }}
                            loadsOnPress={false}
                        >
                            Next
                        </CtaButton>
                    </ButtonPosition>
                </Page>

                <Page>
                    <H1>See your call progress in real time</H1>

                    <ButtonPosition>
                        <CtaButton
                            onPress={() => {
                                moveBody(2);
                            }}
                            loadsOnPress={false}
                        >
                            Next
                        </CtaButton>
                    </ButtonPosition>
                </Page>

                <Page>
                    <H2>
                        Homexe.win, your personal sales and progress tracker
                    </H2>

                    <ButtonPosition>
                        <CtaButton>Register</CtaButton>
                        <Spacer />
                        <P2>Already have an account? Login here</P2>
                    </ButtonPosition>
                </Page>
            </CarouselScrollView>
        </Background>
    );
}

function moveBody(index) {
    scrollRef.scrollTo({
        x: index * width,
        animation: false,
    });
}

const Background = styled.SafeAreaView`
    flex: 1;
    background-color: ${global.bgColor};
`;

const CarouselScrollView = styled.ScrollView`
    flex: 1;
`;

const Page = styled.View`
    width: ${width}px;
    height: ${height}px;
    padding-horizontal: 20px;
    padding-top: 100px;
`;

const ButtonPosition = styled.View`
    position: absolute;
    width: 100%;
    bottom: 150px;
    align-self: center;
    align-items: center;
`;

const Spacer = styled.View`
    height: 15px;
`;
