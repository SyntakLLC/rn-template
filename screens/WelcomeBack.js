import styled from 'styled-components'
import { BarnacleButton } from '../components/buttons/index.js'
import { H1 } from '../components/texts'
import { Background } from '../components/views'
import PositionAtBottom from '../components/views/PositionAtBottom.js'

export default function WelcomeBack() {
    return (
        <Background noScroll color={global.primaryColor}>
            <View>
                <TextSection>
                    <H1>Welcome back!</H1>
                </TextSection>

                <PositionAtBottom>
                    <BarnacleButton
                        overrideLoadingBehavior
                        onPress={() => console.log('')}
                        bgColor="#ffffff"
                        textColor={global.primaryColor}
                    >
                        Enter ➜
                    </BarnacleButton>
                </PositionAtBottom>
            </View>
        </Background>
    )
}

const TextSection = styled.View`
    position: absolute;
    width: 100%;
    bottom: 50%;
    align-self: center;
    align-items: center;
    padding-horizontal: 20px;
`

const View = styled.View`
    width: 100%;
    height: 100%;
`
