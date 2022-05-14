import styled from 'styled-components'
import { ScrollView } from 'react-native'
import '../../global.js'

export default function Background({
    children,
    noScroll = false,
    color = global.bgColor,
}) {
    return (
        <B color={color}>
            <KeyboardView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                {!noScroll && (
                    <ScrollView
                        style={{
                            paddingVertical: 30,
                            width: '100%',
                            paddingHorizontal: 20,
                            overflow: 'shown',
                        }}
                    >
                        {children}
                    </ScrollView>
                )}
                {noScroll && children}
            </KeyboardView>
        </B>
    )
}

const B = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.color};
`

const KeyboardView = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    height: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-radius: 30px;
    background-color: ${global.bgColor};
`
