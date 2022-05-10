import Svg, { Path } from 'react-native-svg';
import styled from 'styled-components';
import { P2 } from '../texts/index.js';

export default function Alert({
    children = 'Hey!', // -> default text
    isDanger = false, // -> make button red
    onPress, // -> function to call on press
}) {
    // derives the color of the button from our props.
    let color = isDanger ? '#fecaca' : '#fef9c3';
    let darkerColor = isDanger ? '#dc2626' : '#facc15';

    return (
        <Touchable
            onPress={() => {
                onPress();
                setLoading(true);
            }}
            style={{ backgroundColor: color + '80' }}
            color={color}
        >
            <IconCircle style={{ backgroundColor: darkerColor }}>
                <BellIcon color={color + '80'} width={22} height={22} />
            </IconCircle>
            <TextView>
                <P2 color='#ca8a04'>{children}</P2>
            </TextView>
        </Touchable>
    );
}

const Touchable = styled.TouchableOpacity`
    width: 100%;
    border-radius: 15px;
    min-height: 55px;
    justify-content: center;
    margin-vertical: 20px;
    padding: 10px;
    align-items: center;
    box-shadow: 4px 4px 0px ${(props) => props.color}50;
    flex-direction: row;
`;

const IconCircle = styled.View`
    width: 30px;
    height: 30px;
    border-radius: 9999px;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20px;
`;

const TextView = styled.View`
    margin-left: 50px;
`;

function BellIcon(props) {
    return (
        <Svg
            fill='none'
            viewBox='0 0 24 24'
            stroke='#fef9c3'
            strokeWidth={2}
            {...props}
        >
            <Path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6.002 6.002 0 0 0-4-5.659V5a2 2 0 1 0-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9'
            />
        </Svg>
    );
}
