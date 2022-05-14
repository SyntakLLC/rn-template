import { CtaButton } from './index.js'
import '../../global.js'

export default function ElegantButton({
    children,
    isDanger = false,
    onPress = () => console.log('hello'),
}) {
    return (
        <CtaButton
            isSharp
            isDanger={isDanger}
            hasShadow={false}
            hideConfetti
            onPress={() => onPress()}
            bgColor={'#fff'}
            textColor={'#1e293b'}
            overrideLoadingBehavior
        >
            {children}
        </CtaButton>
    )
}
