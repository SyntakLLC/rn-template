import styled from 'styled-components';
import { Text } from '../texts/index.js';
import Svg, { Path } from 'react-native-svg';
import '../../global.js';

export default function ModernIconList({ items, onPress }) {
    return (
        <List>
            {items.map((child, index) => {
                return (
                    <Li onPress={onPress} key={index}>
                        <NameAndIcon>
                            {child.icon}
                            {child.icon ? <Spacer /> : null}
                            <Text color={global.textColor}>{child.name}</Text>
                        </NameAndIcon>
                        <Arrow />
                    </Li>
                );
            })}
        </List>
    );
}

const Li = styled.TouchableOpacity`
    padding-vertical: 15px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const NameAndIcon = styled.View`
    flex-direction: row;
    align-items: center;
`;

const Spacer = styled.View`
    width: 8px;
`;

const List = styled.View`
    margin-vertical: 20px;
`;

const Arrow = (props) => (
    <Svg
        style={{ width: 20, height: 20 }}
        fill='none'
        viewBox='0 0 24 24'
        stroke={global.textColor}
        strokeWidth={3}
        {...props}
    >
        <Path strokeLinecap='round' strokeLinejoin='round' d='m9 5 7 7-7 7' />
    </Svg>
);
