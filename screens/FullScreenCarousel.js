import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { CtaButton } from '../components/buttons/index.js';
import '../global.js';

const { width, height } = Dimensions.get('window');

export default function FullScreenCarousel() {
    return (
        <CarouselScrollView
            horizontal
            scrollEventThrottle={16}
            pagingEnabled={true}
            decelerationRate={0}
            snapToAlignment={'center'}
            showsHorizontalScrollIndicator={false}
        >
            <Page>
                <ButtonPosition>
                    <CtaButton />
                </ButtonPosition>
            </Page>

            <Page>
                <ButtonPosition>
                    <CtaButton />
                </ButtonPosition>
            </Page>
        </CarouselScrollView>
    );
}

const CarouselScrollView = styled.ScrollView`
    flex: 1;
`;

const Page = styled.View`
    width: ${width}px;
    height: ${height}px;
    background-color: white;
    padding-horizontal: 20px;
`;

const ButtonPosition = styled.View`
    position: absolute;
    width: 100%;
    bottom: 100px;
    align-self: center;
`;
