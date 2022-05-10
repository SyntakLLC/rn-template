import styled from 'styled-components';
import ButtonText from '../texts/ButtonText.js';
import '../../global.js';

export default function CtaButton({
    children = 'Submit', // -> default text
    isDanger = false, // -> make button red
    isDisabled = false, // -> disable button, no loading indicator
    onPress, // -> function to call on press
    color = '#007aff',
}) {
    // derives the color of the button from our props.
    let c = color;
    if (isDanger) c = '#dc2626';
    if (isDisabled || onPress == null) c = '#9ca3af';

    return (
        <Touchable
            onPress={() => {
                onPress();
                setLoading(true);
            }}
            disabled={isDisabled || onPress == null}
            style={{
                borderColor: c,
                backgroundColor: global.bgColor,
            }}
            color={c}
        >
            <ButtonText color={c}>{children}</ButtonText>
        </Touchable>
    );
}

const Touchable = styled.TouchableOpacity`
    width: 45%;
    border-radius: 9999px;
    min-height: 50px;
    border-color: black;
    border-width: 2px;
    justify-content: center;
    margin-bottom: 10px;
    align-items: center;
    box-shadow: 2px 2px 0px ${(props) => props.color};
`;
// box-shadow: 0px 2px 0px #00000030;
